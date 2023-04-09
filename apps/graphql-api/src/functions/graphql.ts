import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";
import { createYoga } from "graphql-yoga";
import "reflect-metadata";
import { buildSchema, createResolversMap } from "type-graphql";
import {
  constraintDirective,
  constraintDirectiveTypeDefs,
  createEnvelopQueryValidationPlugin,
} from "graphql-constraint-directive";
import { printSchemaWithDirectives } from "@graphql-tools/utils";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { HelloResolver } from "../applications/resolvers";

export async function graphql(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  context.log(`Http function processed request for url "${request.url}"`);

  const nonDirectiveSchema = await buildSchema({
    resolvers: [HelloResolver],
    emitSchemaFile: true,
    validate: { forbidUnknownValues: false },
  });

  const typeDefs = printSchemaWithDirectives(nonDirectiveSchema);
  const resolvers = createResolversMap(nonDirectiveSchema);
  const schema = makeExecutableSchema({
    typeDefs: [typeDefs, constraintDirectiveTypeDefs],
    resolvers,
  });

  const yoga = createYoga({
    schema: constraintDirective()(schema),
    plugins: [createEnvelopQueryValidationPlugin()],
    maskedErrors: false,
    context,
  });

  const headers: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    headers[key] = value;
  });

  const req = new Request(request.url, {
    method: request.method,
    headers: headers,
    body: request.body as ReadableStream,
  });

  try {
    const response = await yoga.handleRequest(req, context);
    return {
      body: await response.text(),
      status: response.status,
      headers: Object.fromEntries(response.headers.entries()),
    };
  } catch (error) {
    context.log(error);
  }
}

app.http("graphql", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: graphql,
});

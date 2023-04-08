import "reflect-metadata";
import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";
import { PlatformBuilder } from "@tsed/common";
import { PlatformKoa } from "@tsed/platform-koa";
import serverless from "@vendia/serverless-express";
import { Server } from "../applications/Server";
import { serverConfig } from "../config/server.config";

const platform = PlatformBuilder.create(Server, {
  adapter: PlatformKoa,
  disableComponentsScan: true,
});

const promise = platform.bootstrap();

export async function api(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  await promise;

  const server = serverless({
    app: platform.callback(),
    eventSourceName: serverConfig.eventSourceName,
    log: platform.logger,
  });
  return server({ req: request }, context);
}

app.http("rest", {
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  authLevel: "anonymous",
  route: "{*route}",
  handler: api,
});

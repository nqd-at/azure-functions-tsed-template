import {
  Arg,
  Field,
  InputType,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";

@ObjectType()
class Hello {
  @Field(() => String)
  message: string;
}

@InputType()
class HelloInput {
  @Field(() => String)
  name: string;
}

@Resolver()
export class HelloResolver {
  @Query(() => Hello)
  hello(@Arg("input") input: HelloInput): Hello {
    return {
      message: `Hello, ${input.name}!`,
    };
  }
}

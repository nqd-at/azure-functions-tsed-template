import { PathParams } from "@tsed/common";
import { Controller } from "@tsed/di";
import { Get, Returns } from "@tsed/schema";

@Controller("/")
export class IndexController {
  @Get("/")
  @Returns(200, String)
  renderHello() {
    return "Hello World";
  }

  @Get("/:name")
  @Returns(200, String)
  renderHelloName(@PathParams("name") name: string) {
    return `Hello ${name}`;
  }
}

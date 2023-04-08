import { PathParams } from "@tsed/common";
import { Controller } from "@tsed/di";
import { Get } from "@tsed/schema";

@Controller("/")
export class IndexController {
  @Get("/")
  renderHello() {
    return "Hello World";
  }

  @Get("/:name")
  renderHelloName(@PathParams("name") name: string) {
    return `Hello ${name}`;
  }
}

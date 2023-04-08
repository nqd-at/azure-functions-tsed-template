import { PathParams } from "@tsed/common";
import { Configuration, Controller } from "@tsed/di";
import { Get } from "@tsed/schema";

@Controller("/")
class IndexController {
  @Get("/")
  renderHello() {
    return "Hello World";
  }

  @Get("/:name")
  renderHelloName(@PathParams("name") name: string) {
    return `Hello ${name}`;
  }
}

@Configuration({
  mount: {
    "/api": [IndexController],
  },
})
export class Server {}

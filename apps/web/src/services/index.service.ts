import { IndexControllerAPI, OpenAPI } from "../api";

OpenAPI.BASE = "http://localhost:7071";

export const indexService = () => {
  return {
    hello(name: string) {
      return IndexControllerAPI.indexControllerRenderHelloName({ name });
    },
  };
};

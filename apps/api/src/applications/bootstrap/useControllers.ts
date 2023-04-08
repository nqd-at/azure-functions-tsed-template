import { Configuration } from "@tsed/di";
import * as controllers from "../controllers";

type UseControllersOptions = {
  mountPath: string
}
export const useControllers = (options: UseControllersOptions): Partial<Configuration> => {
  return {
    mount: {
      [options.mountPath || "/"]: Object.values(controllers),
    },
  };
};

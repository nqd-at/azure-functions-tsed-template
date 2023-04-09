import { Configuration } from "@tsed/di";
import { deepMerge } from "@tsed/core";

export const configure = (...config: Partial<Configuration>[]) => {
  return config.reduce<Partial<Configuration>>((acc, curr) => {
    return deepMerge(acc, curr);
  }, {});
};

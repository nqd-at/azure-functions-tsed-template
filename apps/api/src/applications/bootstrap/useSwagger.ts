import { Configuration } from "@tsed/di";
import "@tsed/swagger";
import { appRelativeUrl } from "../../lib/url";

export type UseSwaggerOptions = {
  path: string;
  fileName: string;
};

export const useSwagger = (
  options: UseSwaggerOptions
): Partial<Configuration> => {
  return {
    swagger: [
      {
        path: appRelativeUrl(options.path),
        specVersion: "3.0.1",
        fileName: options.fileName,
      },
    ],
  };
};

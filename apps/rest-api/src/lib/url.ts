import urlcat from "urlcat";
import { serverConfig } from "../config/server.config";

export const appRelativeUrl = (path?: string) => {
  return urlcat(serverConfig.relativeUrl, path);
};

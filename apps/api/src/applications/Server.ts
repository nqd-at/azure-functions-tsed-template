import { Configuration } from "@tsed/di";
import { configure } from "../lib/configure";
import { useControllers, useMikroOrm, useSwagger } from "./bootstrap";
import { appRelativeUrl } from "../lib/url";
import { databaseConfig } from "../config/database.config";

@Configuration(
  configure(
    useControllers({ mountPath: appRelativeUrl("rest") }),
    useMikroOrm({ connectionString: databaseConfig.connectionString }),
    useSwagger({ path: "docs", fileName: "spec.json" })
  )
)
export class Server {}

import { Configuration } from "@tsed/di";
import { MikroOrmModule } from "@tsed/mikro-orm";
import * as entities from "../../domains/entities";
import { parseConnectionString } from "../../lib/connectionString";

export type UseMikroOrmOptions = {
  connectionString: string;
};

export const useMikroOrm = (
  options: UseMikroOrmOptions
): Partial<Configuration> => {
  const params = parseConnectionString(options.connectionString);
  return {
    imports: [MikroOrmModule],
    mikroOrm: [
      {
        contextName: "default",
        type: "postgresql",
        host: params.host,
        port: params.port,
        user: params.user,
        password: params.password,
        dbName: params.database,
        entities: Object.values(entities),
      },
    ],
  };
};

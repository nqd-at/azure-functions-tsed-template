import { ConnectionString } from "connection-string";

export const parseConnectionString = (connectionString: string) => {
  const parsed = new ConnectionString(connectionString);
  const { protocol, user, password, host, port, path } = parsed;
  const database = path[0];
  return {
    type: protocol,
    user,
    password,
    host,
    port,
    database,
  };
};

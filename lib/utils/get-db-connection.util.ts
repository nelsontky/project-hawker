import { Connection, createConnection, getConnection } from "typeorm";

import config from "ormconfig";

let connectionCreated = false;

async function getDbConnection(): Promise<Connection> {
  const currentConnection = getConnection();
  try {
    if (connectionCreated) {
      return currentConnection;
    }

    // Close connection on hot reload - hot reload causes connectionCreated to revert to false
    await currentConnection.close();
  } catch {
    // ignore connection close errors
  }

  connectionCreated = true;
  return await createConnection(config);
}

export default getDbConnection;

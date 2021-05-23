import { Connection, createConnection } from "typeorm";

import config from "ormconfig";

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = (global as any).typeorm;

if (!cached) {
  cached = (global as any).typeorm = { conn: null, promise: null };
}

async function getDbConnection(): Promise<Connection> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = createConnection(config).then((connection) => {
      return connection;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default getDbConnection;

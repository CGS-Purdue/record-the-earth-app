import { dbConfig } from './config';
import { dbSchema } from './schema';
import { dbStatements } from './statements';

export const DBProps = {
  config: Object.freeze(dbConfig),
  statements: Object.freeze(dbStatements),
  schema: Object.freeze(dbSchema),
};

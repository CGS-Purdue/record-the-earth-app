import { dbConfig } from './config';
import { dbStatements } from './statements';
import { dbSchema }  from './schema';

export const DBProps = {
  config: Object.freeze(dbConfig),
  statements: Object.freeze(dbStatements),
  schema: Object.freeze(dbSchema),
};

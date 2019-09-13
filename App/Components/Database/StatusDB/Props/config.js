// DATABASE CONFIG OBJECT

export const DBName = 'Status';
export const DBDescription = 'Site database and connection health metrics';
export const DBVersion = '1.0.0';
export const DBSize = null;

const dbConfig = {
  name : DBName,
  description : DBDescription,
  version : DBVersion,
  size : DBSize,
};

export { dbConfig }

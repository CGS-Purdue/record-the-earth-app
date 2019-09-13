// DATABASE CONFIG OBJECT

const ConfigName = 'Status';
const ConfigDescription = 'Site database and connection health metrics';
const ConfigVersion = '1.0.0';
const ConfigSize = null;

export  default const DbConfig = {
  name : ConfigName,
  description : ConfigDescription,
  version : ConfigVersion,
  sizes :  ConfigSize,
};

export { ConfigName, ConfigDescription, ConfigVersion, ConfigSize }

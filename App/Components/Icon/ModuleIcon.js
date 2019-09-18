import { Asset } from 'expo-asset';


// class Icon {
//   constructor(name, module, width, height) {
//     this.name = name
//     this.module = module;
//     this.width = width;
//     this.height = height;
//     Asset.fromModule(this.module).downloadAsync();
//   }
// };


export default class ModuleIcon {
  constructor(name, module, width, height) {
    this.name = name;
    this.module = module;
    this.width = width;
    this.height = height;
    this._asset = Asset.fromModule(this.module);
    this._asset.downloadAsync();
  }
}

export { ModuleIcon };

import { Asset } from 'expo-asset';

export default class Icon {

  constructor(name, module, width, height) {
    this.name = name;
    this.module = module;
    this.width = width;
    this.height = height;
    this._asset = Asset.fromModule(this.module);
    this._asset.downloadAsync();
  }
}

export { Icon };

import { ModuleIcon } from './ModuleIcon';

// NEEDS TO LOAD AT THE SAME TIME AS THE OTHER ASSETS IN THE BUNDLE
export function createIcon(name, module, width, height) {
  return new ModuleIcon(name, module, width, height);
}

export function getIcon(key, map) {
  var result = map[key];
  return {
    name: result.name,
    module: result.module,
    width: result.width,
    height: result.height,
  };
}

// NEEDS TO LOAD AT THE SAME TIME AS THE OTHER ASSETS IN THE BUNDLE
export function mapIcon(name, module, width, height) {
  return {
    name: name,
    module: module,
    width: width,
    height: height,
  };
}

export function getThemeIcons(map, assets) {
  let icons = {};

  for (let key of Object.keys(map)) {
    let config = map[key];
    icons[key] = mapIcon(key, assets[key], config[1], config[2]);
  }
  return icons;
}

export function loadThemeIcons(set) {
  let icons = {};
  for (let key of Object.keys(set)) {
    let icon = set[key];
    icons[key] = new ModuleIcon(
      icon.name,
      icon.module,
      icon.width,
      icon.height
    );
  }
  return icons;
}

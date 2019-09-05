#!/usr/bin/env node
module.exports = function (select, options) {
  // =====================================================
  // GENERAL HELP AND INFORMATION PACKAGE
  // =====================================================
  const COLOR = {
    bg_black: '40m',
    bg_blue: '44m',
    bg_cyan: '46m',
    bg_green: '42m',
    bg_magenta: '45m',
    bg_red: '41m',
    bg_white: '47m',
    bg_yellow: '43m',
    black: '30m',
    blue: '34m',
    bright: '1m',
    brightblack: '1;30m',
    brightblue: '1;34m',
    brightcyan: '1;36m',
    brightgreen: '1;32m',
    brightmagenta: '1;35m',
    brightred: '1;31m',
    brightwhite: '1;37m',
    brightyellow: '1;33m',
    cyan: '36m',
    dim: '2m',
    green: '32m',
    hidden: '8m',
    magenta: '35m',
    red: '31m',
    reset: '0m',
    reverse: '7m',
    underscore: '4m',
    white: '37m',
    yellow: '33m',
  };
  const fmt = (s) => {
    return `\x1b[${s}`;
    };
    let spreader = '\t    ';
    const COLUMN_MAX_LENGTH = 50;
    const print_titleline = (titleline) => {
      console.log([fmt(COLOR.brightred), titleline, fmt(COLOR.reset)].join(''));
    };
    const get_titleline = (title) => {
      let title_string = title.toUpperCase();
      return `--- ${title_string} --- \n`;
    };
    const print_title = (title) => {
      print_titleline(get_titleline(title));
    };
    const get_item_format = (key, value) => {
      return [
        '  ',
        [fmt(COLOR.reset), fmt(COLOR.brightgreen), key, fmt(COLOR.reset)].join(''),
        spreader.slice(key.length),
        [fmt(COLOR.reset), JSON.stringify(value), fmt(COLOR.reset)].join(''),
      ].join('');
    };
    const print_item = (key, value) => {
      console.log(get_item_format(key, value));
    };
    const sort_keys = (data) => {
      return data.sort(function(a, b) {
        return a[0].localeCompare(b[0], { caseFirst: false, numeric: true });
      });
    };
    const filter_item = (s, filter) => {
      return s.indexOf(filter) > -1;
    };
    const filter_data_exclude = (data, exclude) => {
      if (exclude.length === 0){ return data; }
      let result = data;
      for (let pattern of exclude) {
        result = result.filter(function(item) {
          return item[0].indexOf(pattern) === -1;
        });
      }
      return result;
    };
    const filter_data_include = (data, include) => {
      if (include.length === 0){ return data; }
      let result = {};
      let matches = [];
      for (let pattern of include) {
        for (let key of Object.keys(data)){
          if (key.indexOf(pattern) > -1) {
            result[key] = data[key];
            matches.push(key);
          }
        }
      }
      return result;
    };

    const get_info = (data, opt) => {
      if (!data) { return; }
      var info = [];
      var item_len_max = 0;
      var item_len_min = 50;

      if (opt.filter_include) {
        data = filter_data_include(data,  opt.filter_include);
      }

      let items = sort_keys(Object.entries(data));
      items = filter_data_exclude(items,  opt.filter_exclude);

      if (items.length === 0) {  return;  }
      for (let item of items) {
        if (item[0].length > item_len_max && item[0].length < COLUMN_MAX_LENGTH) {
          item_len_max = item[0].length;
        }
        if (item[0].length < item_len_min) {
          item_len_min = item[0].length;
        }

        info.push([item[0], item[1]]);
      }

      for (let i = item_len_min; i < item_len_max; i++) {
        spreader = spreader + ' ';
      }
      return info;
    };

    const format_info  = (data) => {
      let formatted = [];
      data.forEach(function(item) {
        formatted.push(get_item_format(item[0], item[1]));
      });
      return formatted.join('\n');
    };

    const print_info = (data) => {
      console.log(data);
    };
    // ----------------------------------------------------------------------------
    // MAIN ENTRYPOINT
    // ----------------------------------------------------------------------------
    const mainpkg = require('../package');
    const appconfig = require('../app');
    var info;
    const info_keys = [
      'process',
      'env',
      'app',
      'config',
      'paths',
      'scripts',
    ];
    const default_options = {
      filter_exclude : [],
      filter_include : false,
    };
    options = Object.assign(default_options, options);
    if (select && info_keys.indexOf(select) >= 0) {
      switch (select) {
        case 'process':
        info = get_info(process, options);
        break;
        case 'env':
        info = get_info(process.env, options);
        break;
        case 'app':
        info = get_info(appconfig.expo, options);
        break;
        case 'config':
        info = get_info(mainpkg.config, options);
        break;
        case 'scripts':
        info = get_info(mainpkg.scripts, options);
        break;
        case 'paths':
        info = get_info(mainpkg.dirs, options);
        break;
        default:
      }
    }
  if (info) {
    print_title(`Nodeinfo: ${select}`);
    let result = format_info(info);
    print_info(result);
    // return result;
  }
};

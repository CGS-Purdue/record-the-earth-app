#!/usr/bin/env node

// =====================================================
// GENERAL HELP AND INFORMATION PACKAGE
//   env     -
//   script  -
//   config  -
//   paths   -
// =====================================================
const encoding = 'utf-8';
let data;
let options={};
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
const fmt = (s) => { return `\x1b[${s}` };
let spreader = "\t    ";
const COLUMN_MAX_LENGTH = 50;
const print_titleline = (titleline) => {console.log([fmt(COLOR.brightred), titleline, fmt(COLOR.reset)].join(''))};
const get_titleline = (title) => { return `--- ${title.toUpperCase()} --- \n` };
const print_title = (title) => { print_titleline(get_titleline(title))};
const print_item = (key, value) => {console.log(
    '  ',
    [fmt(COLOR.reset), fmt(COLOR.brightgreen), key, fmt(COLOR.reset)].join(''),
    spreader.slice(key.length),
    [fmt(COLOR.reset), value, fmt(COLOR.reset)].join(''),
)};
const sort_keys = (data) => {
  return data.sort(function(a,b){
    return a[0].localeCompare( b[0], { caseFirst: false, numeric: true })
  })
};
const filter_item = (s, filter) => {return (s.indexOf(filter) > -1)};
const print_loop = (iterable) => {
  if (! iterable) { return }
  var formatted=[];
  var item_len_max = 0;
  var item_len_min = 50;
  const items = sort_keys(Object.entries(iterable));
  if (items.length === 0 ) { return }
  for (let item of items){
    if (item[0].length > item_len_max && item[0].length < COLUMN_MAX_LENGTH) { item_len_max = item[0].length; }
    if (item[0].length < item_len_min) { item_len_min = item[0].length; }
    if (filter_item(item[0], '')) { formatted.push([item[0], item[1]]) }
  }
  for(i=item_len_min; i < item_len_max; i++){ spreader = spreader + " "; }
  formatted.forEach(function(item){print_item(item[0], item[1])});
  return;
};
const print_info = (name, data) => { print_title(name); print_loop(data); };

// =====================================================
// HANDLE STDIN AND PROCESS
// =====================================================
const read_file_sync=(filepath)=>{
  const fs = require('fs');
  console.log('Reading file from:' ,filepath);
  return fs.readFile(filepath,
    function read(err, data) {
      if (err) { console.log(data ,err); throw err; }
      return  Buffer.from(data, encoding).toString('ascii');
  })
};
const process_file=(args)=>{
  const filepath = Buffer.from(args,'utf8').toString('ascii');
  var filedata = read_file_sync(filepath);
};
const process_data=()=>{
  const content = Buffer.from(data,'utf8').toString('ascii');
  console.log(result);
};
const parse_arg = (arg) => {
  if ((typeof arg === "Object") || (typeof arg === "string")){
    options[arg]=arg;
  } else {
    console.log(arg);
  }
};
// ----------------------------------------------------------------------------
// MAIN ENTRYPOINT
// ----------------------------------------------------------------------------
const mainpkg = require('../package');
const appconfig = require('../app');
const command_list = [
  "app",
  "config",
  "env",
  "paths",
  "scripts",
];
if (process.stdin.isTTY) {
  process.stdin.setEncoding(encoding);
  var buf = Buffer.from(process.argv[2] || '').toString(encoding);
  var select = process.argv[2];
  if ((select) && (command_list.indexOf(select)>=0)) {
    switch (select) {
      case "app":     print_info(select, appconfig.expo);   break;
      case "config":  print_info(select, mainpkg.config);   break;
      case "env":     print_info(select, process.env);      break;
      case "scripts": print_info(select, mainpkg.scripts);  break;
      case "paths":   print_info(select, mainpkg.dirs);     break;
      default:
        console.log('Nothing selected. Choose a category to view.');
        console.log("\t"+command_list.join("\n\t") );
    }
  } else {
    console.log('Nothing selected. Choose a category to view.');
    console.log( "\n\t"+command_list.join("\n\t") +"\n" );
  }
}
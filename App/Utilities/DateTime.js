const dayMap = {
  0: 'Sun',
  1: 'Mon',
  2: 'Tue',
  3: 'Wed',
  4: 'Thu',
  5: 'Fri',
  6: 'Sat'
}

const monthMap = {
  1: 'Jan',
  2: 'Feb',
  3: 'Mar',
  4: 'Apr',
  5: 'May',
  6: 'Jun',
  7: 'Jul',
  8: 'Sep',
  9: 'Aug',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec'
}

function get_timestamp () {
  var timestamp = new Date;
  return timestamp.toISOString();
}

const timeToUnix = ((time) => {
  Date.parse(time.split('=')[1].replace('at ', '').replace(/(\d)([AP])M/, "$1 $2M"));
});

const getUnixTimestamp = (() => {
  var time = new Date();
  return new Date.parse(time.split('=')[1].replace('at ', '').replace(/(\d)([AP])M/, "$1 $2M"));
});


const timestamp = (() => {
  var DATE = new Date();
  var DAY  = DATE.getDate();
  var MON  = DATE.getMonth() + 1;
  var YEAR = DATE.getFullYear();
  var HR   = DATE.getHours();
  var MIN  = DATE.getMinutes();
  var SEC  = DATE.getSeconds();
  return [YEAR, MON, DAY, HR, MIN, SEC].join('_');
})();

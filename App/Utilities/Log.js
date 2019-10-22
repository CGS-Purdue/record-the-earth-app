class Log {
  static _log(message, ...args) {
    if (__DEV__) {
      return console.log('LOG', message, args);
    }
  }
  static _data(msg) {
    if (__DEV__) {
      console.log([`${msg.title}`, `src: ${msg.src}`].join('\n'));
      console.log(msg.data);
    }
  }
  static _info(msg) {
    if (__DEV__) {
      return console.log(msg);
    }
  }

  static _warn(msg, ...args) {
    if (__DEV__) {
      return console.log({
        name: 'WARN',
        preview: msg,
        value: { msg, args },
        important: true,
      });
    }
  }

  static _error(message, ...args) {
    if (__DEV__) {
      return console.log({
        name: 'ERROR',
        preview: message,
        value: { message, args },
        important: true,
      });
    }
  }
}


const _dev = (context, ...msgs) => {

  if (__DEV__){
    let title_style = 'color:cyan; font-weight;bold;';
    let subtitle_style = 'color:lightcoral; font-weight;normal;';

    let logmsg = [];

    for (var msg of msgs){
      if (typeof msg === 'string'){
        logmsg.push(msg);
      } else if (typeof msg === 'number' || typeof msg === 'boolean') {
        logmsg.push(msg);
      } else if (typeof msg === 'object' || typeof msg === 'function') {
        logmsg.push('\n\t');
        logmsg.push(msg);
      } else if (Array.isArray(msg)) {
        logmsg.push('\n\t');
        logmsg.push(msg);
      } else {
        logmsg.push(msg);
      }
    }

    if (Array.isArray(context)) {
      console.log(`%c[${context.shift().toUpperCase()}] %c${context.join(' ')}`, title_style, subtitle_style, ...logmsg);
    } else {
      console.log(`%c[${context.toUpperCase()}]`, title_style, ...logmsg);
    }
  }
};


export { Log, _dev };

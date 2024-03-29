#!/usr/bin/env node
var chalk = require('chalk');
var getenv = require('getenv');
var semver = require('semver');
var version = process.versions.node;
function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _fs() {
  const data = _interopRequireDefault(require('fs'));

  _fs = function () {
    return data;
  };

  return data;
}

function _path() {
  const data = _interopRequireDefault(require('path'));

  _path = function () {
    return data;
  };

  return data;
}

function _url() {
  const data = _interopRequireDefault(require('url'));

  _url = function () {
    return data;
  };

  return data;
}

function _progress() {
  const data = _interopRequireDefault(require('progress'));

  _progress = function () {
    return data;
  };

  return data;
}

function _last() {
  const data = _interopRequireDefault(require('lodash/last'));

  _last = function () {
    return data;
  };

  return data;
}

function _compact() {
  const data = _interopRequireDefault(require('lodash/compact'));

  _compact = function () {
    return data;
  };

  return data;
}

function _findLastIndex() {
  const data = _interopRequireDefault(require('lodash/findLastIndex'));

  _findLastIndex = function () {
    return data;
  };

  return data;
}

function _boxen() {
  const data = _interopRequireDefault(require('boxen'));

  _boxen = function () {
    return data;
  };

  return data;
}

function _bunyan() {
  const data = _interopRequireDefault(require('@expo/bunyan'));

  _bunyan = function () {
    return data;
  };

  return data;
}

function _chalk() {
  const data = _interopRequireDefault(require('chalk'));

  _chalk = function () {
    return data;
  };

  return data;
}

function _ora() {
  const data = _interopRequireDefault(require('ora'));

  _ora = function () {
    return data;
  };

  return data;
}

function _simpleSpinner() {
  const data = _interopRequireDefault(require('@expo/simple-spinner'));

  _simpleSpinner = function () {
    return data;
  };

  return data;
}

function _getenv() {
  const data = _interopRequireDefault(require('getenv'));

  _getenv = function () {
    return data;
  };

  return data;
}

function _commander() {
  const data = _interopRequireWildcard(require('commander'));

  _commander = function () {
    return data;
  };

  return data;
}

function _xdl() {
  const data = require('@expo/xdl');

  _xdl = function () {
    return data;
  };

  return data;
}

function ConfigUtils() {
  const data = _interopRequireWildcard(require('@expo/config'));

  ConfigUtils = function () {
    return data;
  };

  return data;
}

function _accounts() {
  const data = require('./node_modules/expo-cli/build/accounts');

  _accounts = function () {
    return data;
  };

  return data;
}

function _log() {
  const data = _interopRequireDefault(require('./node_modules/expo-cli/build/log'));
  _log = function () {
    return data;
  };

  return data;
}

function _update() {
  const data = _interopRequireDefault(require('./node_modules/expo-cli/build/update'));

  _update = function () {
    return data;
  };

  return data;
}

function _urlOpts() {
  const data = _interopRequireDefault(require('./node_modules/expo-cli/build/urlOpts'));

  _urlOpts = function () {
    return data;
  };

  return data;
}

function _package() {
  const data = _interopRequireDefault(require('./node_modules/expo-cli/package.json'));

  _package = function () {
    return data;
  };

  return data;
}

function _commands() {
  const data = require('./node_modules/expo-cli/build/commands');

  _commands = function () {
    return data;
  };

  return data;
}

function runAsync(programName) {
  try {
    // Setup analytics
    _xdl().Analytics.setSegmentNodeKey('vGu92cdmVaggGA26s3lBX6Y5fILm8SQ7');
    _xdl().Analytics.setVersionName(_package().default.version);

    _registerLogs();

    _xdl().UserManager.setInteractiveAuthenticationCallback(_accounts().loginOrRegisterIfLoggedOut);

    if (process.env.SERVER_URL) {
      let serverUrl = process.env.SERVER_URL;

      if (!serverUrl.startsWith('http')) {
        serverUrl = `http://${serverUrl}`;
      }

      let parsedUrl = _url().default.parse(serverUrl);

      const port = parseInt(parsedUrl.port || '');

      if (parsedUrl.hostname && port) {
        _xdl().Config.api.host = parsedUrl.hostname;
        _xdl().Config.api.port = port;
      } else {
        throw new Error('Environment variable SERVER_URL is not a valid url');
      }
    }

    _xdl().Config.developerTool = _package().default.name;
    _commander().default.name(programName);
    _commander().default.version(_package().default.version).option('-o, --output [format]', 'Output format. pretty (default), raw').option('--non-interactive', 'Fail, if an interactive prompt would be required to continue. Enabled by default if stdin is not a TTY.'); // Load each module found in ./commands by 'registering' it with our commander instance

    (0, _commands().registerCommands)(_commander().default);
    let subCommand = process.argv[2];
    let argv = process.argv.filter(arg => {
      if (subCommand === 'login' && arg === '--github') {
        _log().default.nestedWarn('GitHub login is not currently available.\nPlease log in with your Expo account.');

        return false;
      }

      if (subCommand === 'register' && arg === '--github') {
        _log().default.nestedWarn('GitHub sign up is not currently available.');

        return false;
      }

      return true;
    });

    _commander().default.parse(argv);

    if (typeof _commander().default.nonInteractive === 'undefined') {
      // Commander doesn't initialize boolean args with default values.
      _commander().default.nonInteractive = !process.stdin.isTTY;
    } // Display a message if the user does not input a valid command


    if (subCommand) {
      let commands = [];

      _commander().default.commands.forEach(command => {
        commands.push(command._name);
        let alias = command._alias;

        if (alias) {
          commands.push(alias);
        }
      });

      if (!commands.includes(subCommand)) {
        _log().default.warn(`"${subCommand}" is not an ${programName} command. See "${programName} --help" for the full list of commands.`);

        if (subCommand === 'detach') {
          (0, _log().default)('To eject your project to ExpoKit (previously "detach"), use `expo eject`.');
        }
      }
    } else {
      _commander().default.help();
    }
  } catch (e) {
    console.error(e);
    throw e;
  }
}

async function checkCliVersionAsync() {
  let {
    updateIsAvailable,
    current,
    latest,
    deprecated
  } = await _update().default.checkForUpdateAsync();

  if (updateIsAvailable) {
    _log().default.nestedWarn((0, _boxen().default)(_chalk().default.green(`There is a new version of ${_package().default.name} available (${latest}).
    You are currently using ${_package().default.name} ${current}
    Install expo-cli globally using the package manager of your choice; for example: \`npm install -g ${_package().default.name}\` to get the latest version`), {
      borderColor: 'green',
      padding: 1
    }));
  }

  if (deprecated) {
    _log().default.nestedWarn((0, _boxen().default)(_chalk().default.red(`This version of expo-cli is not supported anymore.
      It's highly recommended to update to the newest version.

      The API endpoints used in this version of expo-cli might not exist,
      any interaction with Expo servers may result in unexpected behaviour.`), {
        borderColor: 'red',
        padding: 1
      }));
    }
  }

  function _registerLogs() {
    let stream = {
      stream: {
        write: chunk => {
          if (chunk.code) {
            switch (chunk.code) {
              case _xdl().NotificationCode.START_LOADING:
              _simpleSpinner().default.start();

              return;

              case _xdl().NotificationCode.STOP_LOADING:
              _simpleSpinner().default.stop();

              return;

              case _xdl().NotificationCode.DOWNLOAD_CLI_PROGRESS:
              return;
            }
          }

          if (chunk.level === _bunyan().default.INFO) {
            (0, _log().default)(chunk.msg);
          } else if (chunk.level === _bunyan().default.WARN) {
            _log().default.warn(chunk.msg);
          } else if (chunk.level >= _bunyan().default.ERROR) {
            _log().default.error(chunk.msg);
          }
        }
      },
      type: 'raw'
    };

    _xdl().Logger.notifications.addStream(stream);

    _xdl().Logger.global.addStream(stream);
  }

async function writePathAsync() {
  let subCommand = process.argv[2];

  if (subCommand === 'prepare-detached-build') {
    // This is being run from Android Studio or Xcode. Don't want to write PATH in this case.
    return;
  }

  await _xdl().Binaries.writePathToUserSettingsAsync();
} // This is the entry point of the CLI


function run(programName) {
  (async function () {
    await Promise.all([writePathAsync(), runAsync(programName)]);
  })().catch(e => {
    console.error('Uncaught Error', e);
    // process.exit(1);
  });
}


function main() {
  _xdl().Api.setClientName(_package().default.version);

  _xdl().ApiV2.setClientName(_package().default.version); // The following prototyped functions are not used here, but within in each file found in `./commands`
  // Extending commander to easily add more options to certain command line arguments


  _commander().Command.prototype.urlOpts = function () {
    _urlOpts().default.addOptions(this);

    return this;
  };

  _commander().Command.prototype.allowOffline = function () {
    this.option('--offline', 'Allows this command to run while offline');
    return this;
  };

  _commander().default.on('--help', () => {
    (0, _log().default)('To learn more about a specific command and its options use \'expo [command] --help\'\n');
  });

  // asyncAction is a wrapper for all commands/actions to be executed after commander is done
  // parsing the command input
  _commander().Command.prototype.asyncAction = function (asyncFn, skipUpdateCheck) {
    return this.action(async (...args) => {
      if (!skipUpdateCheck) {
        try {
          await checkCliVersionAsync();
        } catch (e) {}
      }

      try {
        let options = (0, _last().default)(args);

        if (options.output === 'raw') {
          _log().default.config.raw = true;
        }

        if (options.offline) {
          _xdl().Config.offline = true;
        }

        await asyncFn(...args); // After a command, flush the analytics queue so the program will not have any active timers
        // This allows node js to exit immediately

        _xdl().Analytics.flush();
      } catch (err) {
        // TODO: Find better ways to consolidate error messages
        if (err.isCommandError) {
          _log().default.error(err.message);
        } else if (err._isApiError) {
          _log().default.error(_chalk().default.red(err.message));
        } else if (err.isXDLError) {
          _log().default.error(err.message);
        } else {
          _log().default.error(err.message); // TODO: Is there a better way to do this? EXPO_DEBUG needs to be set to view the stack trace


          if (_getenv().default.boolish('EXPO_DEBUG', false)) {
            _log().default.error(_chalk().default.gray(err.stack));
          } else {
            _log().default.error(_chalk().default.grey('Set EXPO_DEBUG=true in your env to view the stack trace.'));
          }
        }

        // process.exit(1);
      }
    });
  }; // asyncActionProjectDir captures the projectDirectory from the command line,
  // setting it to cwd if it is not provided.
  // Commands such as `start` and `publish` use this.
  // It does several things:
  // - Everything in asyncAction
  // - Checks if the user is logged in or out
  // - Checks for updates
  // - Attaches the bundling logger
  // - Checks if the project directory is valid or not
  // - Runs AsyncAction with the projectDir as an argument


  _commander().Command.prototype.asyncActionProjectDir = function (asyncFn, skipProjectValidation, skipAuthCheck) {
    this.option('--config [file]', 'Specify a path to app.json');
    return this.asyncAction(async (projectDir, ...args) => {
      const opts = args[0];

      if (!projectDir) {
        projectDir = process.cwd();
      } else {
        projectDir = _path().default.resolve(process.cwd(), projectDir);
      }

      if (opts.config) {
        const pathToConfig = _path().default.resolve(process.cwd(), opts.config);

        if (!_fs().default.existsSync(pathToConfig)) {
          throw new Error(`File at provide config path does not exist: ${pathToConfig}`);
        }

        ConfigUtils().setCustomConfigPath(projectDir, pathToConfig);
      }

      const logLines = (msg, logFn) => {
        if (typeof msg === 'string') {
          for (var line of msg.split('\n')) {
            logFn(line);
          }
        } else {
          logFn(msg);
        }
      };

      const logStackTrace = (chunk, logFn, nestedLogFn) => {
        let traceInfo;

        try {
          traceInfo = JSON.parse(chunk.msg);
        } catch (e) {
          return logFn(chunk.msg);
        }

        let {
          message,
          stack
        } = traceInfo;

        _log().default.addNewLineIfNone();

        logFn(_chalk().default.bold(message));

        const isLibraryFrame = line => {
          return line.startsWith('node_modules');
        };

        const stackFrames = (0, _compact().default)(stack.split('\n'));
        let lastAppCodeFrameIndex = (0, _findLastIndex().default)(stackFrames, line => {
          return !isLibraryFrame(line);
        });
        let lastFrameIndexToLog = Math.min(stackFrames.length - 1, lastAppCodeFrameIndex + 2 // show max two more frames after last app code frame
        );
        let unloggedFrames = stackFrames.length - lastFrameIndexToLog; // If we're only going to exclude one frame, just log them all

        if (unloggedFrames === 1) {
          lastFrameIndexToLog = stackFrames.length - 1;
          unloggedFrames = 0;
        }

        for (let i = 0; i <= lastFrameIndexToLog; i++) {
          let line = stackFrames[i];

          if (!line) {
            continue;
          } else if (line.match(/react-native\/.*YellowBox.js/)) {
            continue;
          }

          if (line.startsWith('node_modules')) {
            nestedLogFn('- ' + line);
          } else {
            nestedLogFn('* ' + line);
          }
        }

        if (unloggedFrames > 0) {
          nestedLogFn(`- ... ${unloggedFrames} more stack frames from framework internals`);
        }

        _log().default.printNewLineBeforeNextLog();
      };

      const logWithLevel = chunk => {
        if (!chunk.msg) {
          return;
        }

        if (chunk.level <= _bunyan().default.INFO) {
          if (chunk.includesStack) {
            logStackTrace(chunk, _log().default, _log().default.nested);
          } else {
            logLines(chunk.msg, _log().default);
          }
        } else if (chunk.level === _bunyan().default.WARN) {
          if (chunk.includesStack) {
            logStackTrace(chunk, _log().default.warn, _log().default.nestedWarn);
          } else {
            logLines(chunk.msg, _log().default.warn);
          }
        } else {
          if (chunk.includesStack) {
            logStackTrace(chunk, _log().default.error, _log().default.nestedError);
          } else {
            logLines(chunk.msg, _log().default.error);
          }
        }
      };

      let bar; // eslint-disable-next-line no-new

      new (_xdl().PackagerLogsStream)({
        projectRoot: projectDir,
        onStartBuildBundle: () => {
          bar = new (_progress().default)('Building JavaScript bundle [:bar] :percent', {
            total: 100,
            clear: true,
            complete: '=',
            incomplete: ' '
          });

          _log().default.setBundleProgressBar(bar);
        },
        onProgressBuildBundle: percent => {
          if (!bar || bar.complete) {return;}
          let ticks = percent - bar.curr;
          ticks > 0 && bar.tick(ticks);
        },
        onFinishBuildBundle: (err, startTime, endTime) => {
          if (bar && !bar.complete) {
            bar.tick(100 - bar.curr);
          }

          if (bar) {
            _log().default.setBundleProgressBar(null);

            bar = null;

            if (err) {
              (0, _log().default)(_chalk().default.red('Failed building JavaScript bundle.'));
            } else {
              (0, _log().default)(_chalk().default.green(`Finished building JavaScript bundle in ${endTime.getTime() - startTime.getTime()}ms.`));
            }
          }
        },
        updateLogs: updater => {
          let newLogChunks = updater([]);
          newLogChunks.forEach(newLogChunk => {
            if (newLogChunk.issueId && newLogChunk.issueCleared) {
              return;
            }

            logWithLevel(newLogChunk);
          });
        }
      }); // needed for validation logging to function

      _xdl().ProjectUtils.attachLoggerStream(projectDir, {
        stream: {
          write: chunk => {
            if (chunk.tag === 'device') {
              logWithLevel(chunk);
            }
          }
        },
        type: 'raw'
      }); // The existing CLI modules only pass one argument to this function, so skipProjectValidation
      // will be undefined in most cases. we can explicitly pass a truthy value here to avoid
      // validation (eg for init)
      //
      // If the packager/manifest server is running and healthy, there is no need
      // to rerun Doctor because the directory was already checked previously
      // This is relevant for command such as `send`


      if (!skipProjectValidation && (await _xdl().Project.currentStatus(projectDir)) !== 'running') {
        let spinner = (0, _ora().default)('Making sure project is set up correctly...').start();

        _log().default.setSpinner(spinner); // validate that this is a good projectDir before we try anything else


        let status = await _xdl().Doctor.validateLowLatencyAsync(projectDir);

        if (status === _xdl().Doctor.FATAL) {
          throw new Error('There is an error with your project. See above logs for information.');
        }

        spinner.stop();

        _log().default.setSpinner(null);
      } // the existing CLI modules only pass one argument to this function, so skipProjectValidation
      // will be undefined in most cases. we can explicitly pass a truthy value here to avoid validation (eg for init)


      return asyncFn(projectDir, ...args);
    });
  };

  var supportedVersions = [
    { range: '>=8.9.0 <9.0.0', name: 'Maintenance LTS' },
    { range: '>=10.13.0 <11.0.0', name: 'Active LTS' },
    { range: '>=12.0.0', name: 'Current Release' },
  ];
  var isSupported = supportedVersions.some(function(supported) {
    return semver.satisfies(version, supported.range);
  });

  if (isSupported) {
    if (getenv.boolish('EXPO_DEBUG', false)) {
      require('source-map-support').install();
    }
    run('expo');

  } else {
    var versionInfo = supportedVersions
    .map(function(supported) {
      return '* ' + supported.range + ' (' + supported.name + ')';
    })
    .join('\n');
    console.error(
      chalk.red(
        'ERROR: Node.js version ' +
        version +
        ' is no longer supported.\n\n' +
        'expo-cli supports following Node.js versions:\n' +
        versionInfo
      )
    );
    // process.exit(1);
  }
}

module.exports = main;

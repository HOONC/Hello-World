var _ = require('underscore');
var util = require('../util');

var Errors = require('../util/errors');
var CommandProcessError = Errors.CommandProcessError;
var GitError = Errors.GitError;
var Warning = Errors.Warning;
var CommandResult = Errors.CommandResult;

var instantCommands = [
  [/^ls/, function() {
    throw new CommandResult({
      msg: "DontWorryAboutFilesInThisDemo.txt"
    });
  }],
  [/^cd/, function() {
    throw new CommandResult({
      msg: "Directory Changed to '/directories/dont/matter/in/this/demo'"
    });
  }],
  [/^refresh$/, function() {
    var events = require('../app').getEvents();

    events.trigger('refreshTree');
    throw new CommandResult({
      // msg: "Refreshing tree..."
      msg: "트리 초기화..."
    });
  }],
  [/^rollup (\d+)$/, function(bits) {
    var events = require('../app').getEvents();

    // go roll up these commands by joining them with semicolons
    events.trigger('rollupCommands', bits[1]);
    throw new CommandResult({
      msg: 'Commands combined!'
    });
  }],
  [/^echo "(.*?)"$|^echo (.*?)$/, function(bits) {
    var msg = bits[1] || bits[2];
    throw new CommandResult({
      msg: msg
    });
  }]
];

var regexMap = {
  'reset solved': /^reset solved($|\s)/,
  'help': /^help( general)?$|^\?$/,
  'reset': /^reset$/,
  'delay': /^delay (\d+)$/,
  'clear': /^clear($|\s)/,
  'exit level': /^exit level($|\s)/,
  'sandbox': /^sandbox($|\s)/,
  'level': /^level\s?([a-zA-Z0-9]*)/,
  'levels': /^levels($|\s)/,
  'mobileAlert': /^mobile alert($|\s)/,
  'build level': /^build level($|\s)/,
  'export tree': /^export tree$/,
  'import tree': /^import tree$/,
  'import level': /^import level$/
};

exports.instantCommands = instantCommands;
exports.parse = util.genParseCommand(regexMap, 'processSandboxCommand');

// optimistically parse some level and level builder commands; we do this
// so you can enter things like "level intro1; show goal" and not
// have it barf. when the
// command fires the event, it will check if there is a listener and if not throw
// an error

// note: these are getters / setters because the require kills us
exports.getOptimisticLevelParse = function() {
  return util.genParseCommand(
    require('../level').regexMap,
    'processLevelCommand'
  );
};

exports.getOptimisticLevelBuilderParse = function() {
  return util.genParseCommand(
    require('../level/builder').regexMap,
    'processLevelBuilderCommand'
  );
};

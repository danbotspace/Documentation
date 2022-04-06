function defineMessage(type, string) {
    const chalk = require('chalk');
    if (!string) return;
    string = chalk.gray(string);
    if (type == 'OK') return chalk.bgGreen.bold(' OK ') + ' ' + string;
    if (type == 'WARN') return chalk.bgYellow.bold(' WARN ') + ' ' + string;
    if (type == 'ERR') return chalk.white.bgRed.bold(' ERR ') + ' ' + string;
    return chalk.white.bgRed.bold(' ERR ') + chalk.gray(' Wrong type provided!');
}

function exec(cmd, handler = function(err, stdout, stderr){
    if (stdout) console.log(defineMessage('WARN', stdout));
    if (err) console.log(defineMessage('ERR', stderr));
}) {
    const childfork = require('child_process');
    return childfork.exec(cmd, handler);
}

module.exports = {
    defineMessage, exec
};
// Custom message format: OK, WARN, ERR
function defineMessage(type, string) {
    const chalk = require('chalk');
    if (!string) return;
    string = chalk.gray(string);
    if (type == 'OK') return chalk.bgGreen.bold(' OK ') + ' ' + string;
    if (type == 'WARN') return chalk.bgYellow.bold(' WARN ') + ' ' + string;
    if (type == 'ERR') return chalk.white.bgRed.bold(' ERR ') + ' ' + string;
    return chalk.white.bgRed.bold(' ERR ') + chalk.gray(' Wrong type provided!');
}

// Execute Bash commands
function exec(cmd, handler = function(err, stdout, stderr){
    if (stdout) console.log(defineMessage('WARN', stdout));
    if (err) console.log(defineMessage('ERR', stderr));
}) {
    const childfork = require('child_process');
    return childfork.exec(cmd, handler);
}

// Return random logo
// e.g. either /dbh-docs.png or /blob-help.png
function randomLogo() {
    let logo = '/dbh-docs.png';
    let random = Math.random();
    if (random > 0.9) logo = '/blob-help.png';
    return logo;
}

module.exports = {
    defineMessage, exec, randomLogo
};
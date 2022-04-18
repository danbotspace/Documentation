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

// Read summary.md
// Return the next hyperlink and name
function npFromSummary(urlRequested) {
    const fs = require('fs');
    const regex = new RegExp('\\+\\+ (.*) \\+\\+ (.*) \\+\\+ (.*) \\+\\+', 'gm');
    let m, hyperlink, name, icon;
    let data = fs.readFileSync('./views/summary.md', 'utf8');
    do {
        m = regex.exec(data);
        if (m && m[2] == urlRequested) {
            m = regex.exec(data);
            if (m) {
                icon = m[1];
                hyperlink = m[2];
                name = m[3];
            }
            m = '';
        }
    } while (m);
    icon = icon || 'fa-solid fa-door-open';
    hyperlink = hyperlink || '/introduction/';
    name = name || 'Introduction';
    return [hyperlink, name, icon];
}

// Return random logo
// e.g. either /dbh-docs.png or /blob-help.png
function randomLogo() {
    let logo = '/dbh-docs.png';
    let random = Math.random();
    if (random > 0.9) logo = '/blob-help.png';
    return logo;
}

function filterSummary(text) {
    return text.replace(/<.*(li|ul)>/gm, '').replace(/<em>.*<\/em>/gm, '');
}
// ———————————No lists?———————————
// ⠀⣞⢽⢪⢣⢣⢣⢫⡺⡵⣝⡮⣗⢷⢽⢽⢽⣮⡷⡽⣜⣜⢮⢺⣜⢷⢽⢝⡽⣝
// ⠸⡸⠜⠕⠕⠁⢁⢇⢏⢽⢺⣪⡳⡝⣎⣏⢯⢞⡿⣟⣷⣳⢯⡷⣽⢽⢯⣳⣫⠇
// ⠀⠀⢀⢀⢄⢬⢪⡪⡎⣆⡈⠚⠜⠕⠇⠗⠝⢕⢯⢫⣞⣯⣿⣻⡽⣏⢗⣗⠏⠀
// ⠀⠪⡪⡪⣪⢪⢺⢸⢢⢓⢆⢤⢀⠀⠀⠀⠀⠈⢊⢞⡾⣿⡯⣏⢮⠷⠁⠀⠀
// ⠀⠀⠀⠈⠊⠆⡃⠕⢕⢇⢇⢇⢇⢇⢏⢎⢎⢆⢄⠀⢑⣽⣿⢝⠲⠉⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⡿⠂⠠⠀⡇⢇⠕⢈⣀⠀⠁⠡⠣⡣⡫⣂⣿⠯⢪⠰⠂⠀⠀⠀⠀
// ⠀⠀⠀⠀⡦⡙⡂⢀⢤⢣⠣⡈⣾⡃⠠⠄⠀⡄⢱⣌⣶⢏⢊⠂⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⢝⡲⣜⡮⡏⢎⢌⢂⠙⠢⠐⢀⢘⢵⣽⣿⡿⠁⠁⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠨⣺⡺⡕⡕⡱⡑⡆⡕⡅⡕⡜⡼⢽⡻⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⣼⣳⣫⣾⣵⣗⡵⡱⡡⢣⢑⢕⢜⢕⡝⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⣴⣿⣾⣿⣿⣿⡿⡽⡑⢌⠪⡢⡣⣣⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⡟⡾⣿⢿⢿⢵⣽⣾⣼⣘⢸⢸⣞⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠁⠇⠡⠩⡫⢿⣝⡻⡮⣒⢽⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ——————————————————————————————

module.exports = {
    defineMessage, exec, filterSummary, npFromSummary, randomLogo
};
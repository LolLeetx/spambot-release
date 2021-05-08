const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = `spam_`
const commands = require(`./bin/commands`);
var pathToFfmpeg = require('ffmpeg-static');

console.log(pathToFfmpeg);
client.on('message', msg => {
    if (msg.content.startsWith(prefix)) {
        const commandBody = msg.content.substring(prefix.length).split(' ');
        const channelName = commandBody[1];

        if (commandBody[0] === ('enter') && commandBody[1]) commands.enter(msg, channelName);
        if (commandBody[0] === ('exit')) commands.exit(msg);
    }
});

client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
    console.log(`\nONLINE\n`);
});
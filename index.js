require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCmds = require('./commands');


const TOKEN = process.env.TOKEN;

Object.keys(botCmds).map(key => {
    bot.commands.set(botCmds[key].name, botCmds[key]);
    console.info(`Setting command for ${key}`);
  });

bot.login(TOKEN);
console.dir(bot.channels);

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}`)
});

bot.on('message', message => {
    const args = message.content.split(/ +/);
    const command = args.shift().toLowerCase();
    // const channel = bot.channels();
    console.info(`Calling command: ${command}`);
    if(!bot.commands.has(command)) return;

    try {
        bot.commands.get(command).execute(message, args);
    } catch(error) {
        message.reply("Error in executing command");
    }
});

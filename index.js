const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTczNjAxNzU0MjE4ODg5MjM2.XMtQug.7HX4jWlBZeRsVkNUppu-HOYPEPg';

const PREFIX = '~';

bot.on('ready', () => {
    console.log("This bot is online!");
});

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.sendMessage("pong!");
            break;
        case 'Eddie':
            message.channel.sendMessage("I don't really care");
            break;
        case 'Randy':
            message.channel.sendMessage("Your mother!");
            break;
        case 'purge':
            if(!args[1]) return message.reply('Define total number of lines');
            message.channel.bulkDelete(args[1]);
            break;
        case 'Reminder':
            if(!args[4]) return message.reply("Requries three arguements, Date Month Year Time. Please Enter time in military format.");
                var day = args[1];
                var month = args[2];
                var year = args[3];
                var time = args[4];
                return message.channel.send("Reminder Set for:" + " " + day + " " + month + " " + year + " " + time);
            break;
            case 'reminder':
            if(!args[3]) return message.reply("Requries three arguements, Date Month Year");
            break;
    }
})

bot.login(token);
const Discord = require('discord.js');
const bot = new Discord.Client();
const token = '';
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

            /**
             * Delete
             * Deletes the corresponding amount of messages based on user input
             */
            
        case 'delete':
            if(!args[1]) return message.reply('Define total number of lines');
            message.channel.bulkDelete(args[1]);
            break;

            /**
             * Reminder
             * Creates a reminder with Day Month Year Time format
             * Time is in military format
             */

        case 'Reminder':
            if(!args[4]) return message.reply("Requries three arguements, Date Month Year Time. Please Enter time in military format.");
                var day = args[1];
                var month = args[2];
                var year = args[3];
                var time = args[4];
                return message.channel.send("Reminder Set for:" + " " + day + " " + month + " " + year + " " + time);
                break;

            /**
             * Math
             * Covers all 4 operations 
             * 1 Addition, 2 Multiplication, 3 Division, 4 Subtraction
             * Takes in three arguements -> (Operation, Value A, Value B)
             */

            case 'math':
            if(!args[3]) return message.replay("Requires three arguements, 1 - Addition, 2 - Multiplication, 3 - Division, 4 - Subtraction. Then the two values, A and B");
            var operation = args[1];
            var a = arg[2];
            var b = arg[3];

            if(args[1] == 1){
                return message.channel.send(a+b);
            }
            if(args[1] == 2){
                return message.channel.send(a*b);
            }
            if(args[1] == 3){
                return message.channel.send(a/b);
            }
            if(args[1] == 4){
                return message.channel.send(a-b);
            }
        }       
    })
    
    bot.login(token);
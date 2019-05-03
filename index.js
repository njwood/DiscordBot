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

        case 'help':
            if(args[0] && !args[1]) message.channel.send(" ``` The Prefix for Commands is ! \n !Ping - Pong \n !delete [arg] - Deletes messages based on given integer arguement ```");
            if(args[1] == 1) message.channel.send(" ``` !Reminder [arg] [arg] [arg] [arg] - Follows Day Month Year Time format. Time is in military. ```");
            if(args[1] == 2) message.channel.send(" ``` !Math [arg] [arg] [arg] - First argument is operation. 1 for addition. 2 for multiplication. 3 for division. 4 for subraction. Args 2 and 3 are varaibles A and B ```");
            break;

            /**
            * Ping
            * Pong
            */

        case 'ping':
            message.channel.send("pong!");
            break;

            /**
             * Delete
             * Deletes the corresponding amount of messages based on user input
             */
            
        case 'delete':
            if(!args[1]) return message.reply('Define total number of lines');
            if(args[1] <= 0) return message.reply('Please insert a value greater than zero');
            message.channel.bulkDelete(args[1]);
            break;

            /**
             * Reminder
             * Creates a reminder with Day Month Year Time format
             * Time is in military format
             */

        case 'Reminder':
            if(!args[5]) return message.reply("Requries four arguements, Date Month Year Time. Please Enter time in military format.");
                var day = args[1];
                var month = args[2];
                var year = args[3];
                var time = args[4];
                var reminder = args[5];
                var Date = (day, month, year, time);
                return message.channel.send("Reminder Set for:" + " " + day + " " + month + " " + year + " " + time);

                function alertFunction(){
                    alert("Your Reminder for " + reminder + " has occured.");
                }

                funtion reminderFunction(){
                  var remind = (setTimeout(alertFunction, date.time));
                }

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
            var a = args[2];
            var b = args[3];

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
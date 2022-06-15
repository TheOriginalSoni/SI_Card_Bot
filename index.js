/*
    Author: Carlo I Gonzalez "SpeedyOlrac"
    Desciption: THis bot is made to help spirit island card and spirit panel look ups.
        Now has random Spirit and adversary fuctions.
        Creates link to the Spirit ISland FAQ page.
        Expand Search to other commands
    Version 2.8.2 role bot  
*/



require('dotenv').config(); 
const fs = require('fs');
const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = "-";

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
        //if(command.public){
        bot.commands.set(command.name, command);
//}
};

bot.once('ready', async() => {
    console.log('This bot is online');

    bot.commands.forEach(element => {
        console.log(element.name);
    });
   

});

bot.on('message', async msg => {

    if (!msg.content.startsWith(PREFIX)) return;

    let args = msg.content.slice(PREFIX.length).trim().split(' ');
    let command = args.shift().toLowerCase();
    console.log(command);

    // if (!isNaN(parseInt(command))) {
    //     args = [command]
    //     command = "choose"
    // }
    //

    if (!bot.commands.has(command)) return console.log("command not in list");

    try {
        await bot.commands.get(command).execute(msg, args, Discord);
    } catch (error) {
        console.error(error);
    }
});


bot.login();
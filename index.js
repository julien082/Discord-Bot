const Discord = require('discord.js');
const client = new Discord.Client();


client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
  if (message.content === '!ak') {  
    message.channel.send(`https://prnt.sc/xtcole`)};
  if (message.content === '!fal') {  
    message.channel.send(`https://prnt.sc/xtcp9q`)};
  if (message.content === '!rpk') {  
    message.channel.send(`https://prnt.sc/xtcs45`)};
  if (message.content === '!m1') {  
    message.channel.send(`https://prnt.sc/xtcsym`)};  
});

client.login(process.env.TOKEN)
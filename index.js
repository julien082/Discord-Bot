const Discord = require('discord.js');
const client = new Discord.Client();


client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
  if (message.content === '!map') {  
    message.channel.send(`Interactive : <https://www.gamemaps.co.uk/game/tarkov/maps/glory4life_updated_feb_2021>

  Factory : <https://escapefromtarkov-fr.gamepedia.com/Usine>
  Customs : <https://escapefromtarkov-fr.gamepedia.com/Douanes>
  Interchange : <https://escapefromtarkov-fr.gamepedia.com/%C3%89changeur>
  Shoreline : <https://escapefromtarkov-fr.gamepedia.com/Littoral>
  The Lab : <https://escapefromtarkov-fr.gamepedia.com/Labo>
  Woods : <https://escapefromtarkov-fr.gamepedia.com/Bois>
  Military : <https://escapefromtarkov-fr.gamepedia.com/Base_militaire>`)}; 
  if (message.content === '!rpk') {  
    message.channel.send(`https://prnt.sc/xtcs45`)}; 
  if (message.content === '!rpk') {  
    message.channel.send(`https://prnt.sc/xtcs45`)}; 
  if (message.content === '!rpk') {  
    message.channel.send(`https://prnt.sc/xtcs45`)}; 
  if (message.content === '!rpk') { 
    message.channel.send(`https://prnt.sc/xtcs45`)};   


  if (message.content === '!ak') {  
    message.channel.send(`https://prnt.sc/xtcole`)};
  if (message.content === '!rpk') {  
    message.channel.send(`https://prnt.sc/xtcs45`)}; 
  if (message.content === '!fal') {  
    message.channel.send(`https://prnt.sc/xtcp9q`)};
  if (message.content === '!m1') {  
    message.channel.send(`https://prnt.sc/xtcsym`)};  
});

client.login(process.env.TOKEN)
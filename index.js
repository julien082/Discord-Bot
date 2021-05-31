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
  if (message.content === '!quest') {  
    message.channel.send(`https://media.discordapp.net/attachments/776801862778093568/798907782635716658/Objets_de_quetes.jpg?width=1346&height=676`)}; 
  if (message.content === '!ammo') {  
    message.channel.send(`https://tarkov.ascheron.dev/`)}; 
  if (message.content === '!key') {  
    message.channel.send(`https://prnt.sc/r9dlgs`)}; 
  if (message.content === '!graphiccard') { 
    message.channel.send(`https://escapefromtarkov.fandom.com/fr/wiki/Fichier:BTC_time_to_graphics_card_chart.png`)};   


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
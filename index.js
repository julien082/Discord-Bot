const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require("ytdl-core");
const queue = new Map();
const { prefix } = require ('./config.json')
const fs = require('fs');

client.commands = new Discord.Collection()
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
  for(const file of commandFiles){
      const command = require(`./commande/${file}`)

      client.commands.set(command.name, command)
}

client.once('ready', () => {
    console.log('Ready!');
});

/** Commandes */
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
   if (message.content === '!ledx') {  
    message.channel.send(`104 Ouest | 205 Ouest | 301 Ouest | 107 Est | 222-226 Est | 313-314 Est | Emercom | Blue Keycard | Green Keycard`)};
  if (message.content === '!graphic') { 
    message.channel.send(`https://escapefromtarkov.fandom.com/fr/wiki/Fichier:BTC_time_to_graphics_card_chart.png`)};   
  

  if (message.content === '!m4') {  
    message.channel.send(`https://prnt.sc/xtckq4 https://prnt.sc/xtclh5`)};
  if (message.content === '!hk') {  
    message.channel.send(`https://prnt.sc/xtcqqu`)};
  if (message.content === '!ak') {  
    message.channel.send(`https://prnt.sc/xtcole`)};
  if (message.content === '!akm') {  
    message.channel.send(`https://prnt.sc/xtcnyk`)};
  if (message.content === '!akms') {  
    message.channel.send(`https://prnt.sc/xtd5f2`)};
  if (message.content === '!ak101') {  
    message.channel.send(`https://prnt.sc/xtcmwd`)};
  if (message.content === '!ak103') {  
    message.channel.send(`https://prnt.sc/xtcole`)};
  if (message.content === '!rpk') {  
    message.channel.send(`https://prnt.sc/xtcs45`)};
  if (message.content === '!rpk') {  
    message.channel.send(`https://prnt.sc/xtcs45`)}; 
  if (message.content === '!vepr') {  
    message.channel.send(`https://prnt.sc/q78tlr`)};
  if (message.content === '!dt') {  
    message.channel.send(`https://prnt.sc/xtd2ga`)};
  if (message.content === '!val') {  
    message.channel.send(`https://prnt.sc/vgwi3l`)};

  if (message.content === '!mp5') {  
    message.channel.send(`https://prnt.sc/xtd34d`)};
  if (message.content === '!mp7') {  
    message.channel.send(`https://prnt.sc/xtd18r`)};
  if (message.content === '!mpx') {  
    message.channel.send(`https://prnt.sc/xtd6b8`)};
  if (message.content === '!p90') {  
    message.channel.send(`https://prnt.sc/xtcole`)};
  if (message.content === '!vector') {  
    message.channel.send(`https://prnt.sc/xtcole`)};

  if (message.content === '!adar') {  
    message.channel.send(`http://prntscr.com/q4c3t6`)};
  if (message.content === '!fal') {  
    message.channel.send(`https://prnt.sc/xtcp9q`)};
  if (message.content === '!sr') {  
    message.channel.send(`https://prnt.sc/xtcy5r`)};
  if (message.content === '!tx') {  
    message.channel.send(`https://prnt.sc/xtcj6b`)};


  if (message.content === '!sks') {  
    message.channel.send(`https://prnt.sc/xtcfd5`)};
  if (message.content === '!svds') {  
    message.channel.send(`https://prnt.sc/xtcole`)};
  if (message.content === '!m1') {  
    message.channel.send(`https://prnt.sc/xtcsym`)};
  if (message.content === '!m700') {  
    message.channel.send(`https://prnt.sc/xtcrdm`)};
  if (message.content === '!t5000') {  
    message.channel.send(`https://prnt.sc/t1thcp`)};
  if (message.content === '!rsass') {  
    message.channel.send(`https://prnt.sc/xtcw7j`)};
  if (message.content === '!mk') {  
    message.channel.send(`https://prnt.sc/xtcsym`)};  

  if (message.content === '!breton') {  
    message.channel.send(`https://tenor.com/view/linksthesun-breton-bretagne-galettes-gif-7912654`)}; 
  if (message.content === '!chauve') {  
    message.channel.send(`https://tenor.com/view/calou-eggs-head-bald-gif-16129954`)}; 

    /** clean */

  if(!message.content.startsWith(prefix) || message.author.bot) return
  const args = message.content.slice(prefix.lenght).split(/ +/)
  const command = args.shift().toLowerCase();

  if (command === 'clear') {    
    client.commands.get('clear').execute(message, args);
  }

     /**clean */

});

/** Commandes */

/** Music */
/** 
client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const serverQueue = queue.get(message.guild.id);

  if (message.content.startsWith(`${prefix}play`)) {
    execute(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}skip`)) {
    skip(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}stop`)) {
    stop(message, serverQueue);
    return;
  } else {
    message.channel.send("You need to enter a valid command!");
  }
});

async function execute(message, serverQueue) {
  const args = message.content.split(" ");

  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel)
    return message.channel.send(
      "You need to be in a voice channel to play music!"
    );
  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    return message.channel.send(
      "I need the permissions to join and speak in your voice channel!"
    );
  }

  const songInfo = await ytdl.getInfo(args[1]);
  const song = {
        title: songInfo.videoDetails.title,
        url: songInfo.videoDetails.video_url,
   };

  if (!serverQueue) {
    const queueContruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };

    queue.set(message.guild.id, queueContruct);

    queueContruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueContruct.connection = connection;
      play(message.guild, queueContruct.songs[0]);
    } catch (err) {
      console.log(err);
      queue.delete(message.guild.id);
      return message.channel.send(err);
    }
  } else {
    serverQueue.songs.push(song);
    return message.channel.send(`${song.title} has been added to the queue!`);
  }
}

function skip(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
  if (!serverQueue)
    return message.channel.send("There is no song that I could skip!");
  serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
    
  if (!serverQueue)
    return message.channel.send("There is no song that I could stop!");
    
  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);
  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }

  const dispatcher = serverQueue.connection
    .play(ytdl(song.url))
    .on("finish", () => {
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
  serverQueue.textChannel.send(`Start playing: **${song.title}**`);
}*/

/** Music */

client.login(process.env.TOKEN)
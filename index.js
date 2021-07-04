const Discord = require('discord.js');
const { downloadFromInfo } = require('ytdl-core');
const client = new Discord.Client();
const ytdl = require("ytdl-core");
const queue = new Map();
const { prefix } = require ('./config.json');


/**
const { CommandoClient } = require('discord.js-commando');
const client = new CommandoClient({
    commandPrefix:'!',
    owner: '300696920375164929'
});
const path = require('path');

client.registry
  .registerDefaultTypes()
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerGroups(['music'])
	.registerCommandsIn(path.join(__dirname, 'commands'));
*/

const { MessageAttachment } = require('discord.js')
const nodeHtmlToImage = require('node-html-to-image')

module.exports = async (msg, name) => {

  const _htmlTemplate = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <style>
      body {
        font-family: "Poppins", Arial, Helvetica, sans-serif;
        background: rgb(22, 22, 22);
        color: ##A1A440;
        max-width: 300px;
      }

      .app {
        max-width: 300px;
        padding: 20px;
        display: flex;
        flex-direction: row;
        border-top: 3px solid rgb(16, 180, 209);
        background: rgb(31, 31, 31);
        align-items: center;
      }

      img {
        width: 50px;
        height: 50px;
        margin-right: 20px;
        border-radius: 50%;
        border: 1px solid #fff;
        padding: 5px;
      }
    </style>
  </head>
  <body>
    <div class="app">
      <img src="https://avatars.dicebear.com/4.5/api/avataaars/${name}.svg" />

      <h4>Welcome ${name}</h4>
    </div>
  </body>
</html>
`

  const images = await nodeHtmlToImage({
    html: _htmlTemplate,
    quality: 100,
    type: 'jpeg',
    puppeteerArgs: {
      args: ['--no-sandbox'],
    },
    encoding: 'buffer',
  })

  if (message.content ==='!oui') msg.channel.send(new MessageAttachment(images, `${name}.jpeg`))
}





client.once('ready', () => {
    console.log('Ready!');
});

/** Commandes */
client.on('message', message => {
  if (message.content === '!help') {  
    message.channel.send(`>>> <a:commandes:861037555301220413>   **Commandes** : !clear (supprimer messages).

<:tarkov:861045088900743228>   **Tarkov** : !map, !quest, !ammo, !key, !ledx, !graphic, !scav.
   
● **Armes** : 
   
- <:assaut:861054281276719125>  **Assauts** : !m4, !hk, !rpk, !ak, !akm, !akms, !ak101, !ak103, !vepr, !dt, !val.
   
- <:weapon:861047801239830539>  **Mitraillettes** : !mpx, !mp5, !mp7, !p90, !vector.
   
- <:rifle:861050143813926943>  **Coup par coup** : !adar, !fal, !sr, !tx.
   
- <:sniper:861047828607270922>  **Snipes** : !sks, !svds, !m1, !m700, !t5000, !rsass, !mk.`)};














if (message.content === '!testt') {  
  (`>>> <a:commandes:861037555301220413>   **Commandes** : !clear (supprimer messages).
  
  <:tarkov:861045088900743228>   **Tarkov** : !map, !quest, !ammo, !key, !ledx, !graphic, !scav.
   
  ● **Armes** : 
   
  - <:assaut:861054281276719125>  **Assauts** : !m4, !hk, !rpk, !ak, !akm, !akms, !ak101, !ak103, !vepr, !dt, !val.
   
  - <:weapon:861047801239830539>  **Mitraillettes** : !mpx, !mp5, !mp7, !p90, !vector.
   
  - <:rifle:861050143813926943>  **Coup par coup** : !adar, !fal, !sr, !tx.
   
  - <:sniper:861047828607270922>  **Snipes** : !sks, !svds, !m1, !m700, !t5000, !rsass, !mk.`);

  const {MessageAttachment} = require ('discord.js')
  const diceImg = new MessageAttachment ('./Images/killaa.jpg')
  const embed = new Discord.MessageEmbed()
  .setColor("#9EA440")
  .setTitle('<a:commandes:861037555301220413>  **Commandes :** ')
  .attachFiles(diceImg)
  .setThumbnail('attachment://killaa.jpg')
  .addFields(
    { name: '!clear ', value:'(supprimer les messages)', inline: false },
    { name: '<:tarkov:861045088900743228>  **Tarkov** :', value: '!map, !quest, !ammo, !key, !ledx, !graphic, !scav.', inline: false },
    { name: '●', value: '**Armes** :', inline: false},
    { name: '<:assaut:861054281276719125>  **Assauts** :' , value: '!m4, !hk, !rpk, !ak, !akm, !akms, !ak101, !ak103, !vepr, !dt, !val.', inline: false },
    { name: '<:weapon:861047801239830539>  **Mitraillettes** :', value: '!mpx, !mp5, !mp7, !p90, !vector.', inline: false },
    { name: '<:rifle:861050143813926943>  **Coup par coup** :', value: '!adar, !fal, !sr, !tx.', inline: false },
    { name: '<:sniper:861047828607270922>  **Snipes** :', value: '!sks, !svds, !m1, !m700, !t5000, !rsass, !mk.', inline: false },
  )
  return message.channel.send(embed)
}


module.exports = async (message) => {
  if (message.content === '!teest') {  
    message.channel.send({
        "username": "",
        "avatar_url": "",
        "content": "",
        "embeds": [
          {
            "title": "ljjkljk",
            "color": 8454016,
            "description": "jkljklhjkhjkhjkjk",
            "timestamp": "",
            "author": {
              "name": "hkhk",
              "url": "jhk"
            },
            "image": {},
            "thumbnail": {},
            "footer": {
              "text": "kjkhj"
            },
            "fields": []
          }
        ],
        "components": []
      }
 )
};
}



const embed = {
  "title": "A Title" ,
  "color": 0xF96221,
  "thumbnail": {
    "url": "attachment://image.png"
  },
  "fields": [
    {
      "name": "Field 1:",
      "value": "One",
      "inline": false
    },
    {
      "name": "Field 2:",
      "value": "Two",
      "inline": true,
    },
    {
      "name":"Field 3:",
      "value":"Three",
      "inline": true
    },
  ],
  "footer": {
    "text":"Footer text"
  }
};






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
    message.channel.send(`https://prnt.sc/r9dlgs https://prnt.sc/10o12ur`)}; 
   if (message.content === '!ledx') {  
    message.channel.send(`104 Ouest | 205 Ouest | 301 Ouest | 107 Est | 222-226 Est | 313-314 Est | Emercom | Blue Keycard | Green Keycard`)};
  if (message.content === '!graphic') { 
    message.channel.send(`https://escapefromtarkov.fandom.com/fr/wiki/Fichier:BTC_time_to_graphics_card_chart.png`)};   
  if (message.content === '!scav') { 
    message.channel.send(`https://cdn.discordapp.com/attachments/776801862778093568/860476889650561034/EFT_Scav_Code_FR.png
Update:
● La réputation chez Fence ne diminuera désormais pas si le joueur a tué un Scav qui a attaqué en premier.`)};   

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
    message.channel.send(`https://prnt.sc/13p32ym`)};
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
    message.channel.send(`https://prnt.sc/17idxmr`)};  

  if (message.content === '!dododex') {  
    message.channel.send(`https://www.dododex.com/`)}; 

  if (message.content === '!breton') {  
    message.channel.send(`https://tenor.com/view/linksthesun-breton-bretagne-galettes-gif-7912654`)}; 
  if (message.content === '!chauve') {  
    message.channel.send(`https://tenor.com/view/calou-eggs-head-bald-gif-16129954`)}; 
    if (message.content === '!test') {  
      message.channel.send('')}; 

/** Clear */
  
  if (message.content.startsWith("!clear")){
    message.delete();
      if(message.member.hasPermission('MANAGE_CHANNELS')){
        let args = message.content.trim().split(/ +/g);
        if(args[1]){
          if(!isNaN(args[1]) && args[1] >= 1 && args [1] <= 10){
            message.channel.bulkDelete(args[1])
            message.channel.send(`${args[1]} messages supprimés`)
          }
          else{
            message.channel.send('Entre 1 et 10 messages BLYAT !')
          }
        }
          else{
            message.channel.send('Met un chiffre après clear con DAVAÏ !')
          }
        }
          else{
            message.channel.send('Ta pas le dtoit de supprimer les messages KURWA !')
          }
        }

/** Clear  */

});

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
}
*/
/** Music */

client.login(process.env.TOKEN)
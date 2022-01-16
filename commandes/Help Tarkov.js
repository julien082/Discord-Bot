const {  MessageEmbed } = require('discord.js')
const {MessageAttachment} = require ('discord.js')
const diceImg = new MessageAttachment ('./Images/Killa.png')

module.exports = {
    name: 'help',
    description: 'commandes bot',
    execute( message, args ){
      const embed = new MessageEmbed()  
          .setColor('#FDFEFE')
          .setTitle('<a:commandes:861037555301220413>᲼**Commandes :**')
          .attachFiles(diceImg)
          .setImage('attachment://Killa.png')
          .setThumbnail(message.author.avatarURL({ dynamic: true, size: 256 }))
          .addFields(
            { name: '\u200b', value: '**!clear**᲼( supprimer messages )᲼᲼᲼᲼᲼᲼\u200b!lost (commandes Lost Ark)\u200b', inline: false },              
            { name: '<:tarkov:861045088900743228>  **Tarkov** :', value: '!film.᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼ !patch, !map, !quest, !ammo, !key, !ledx, !graphic, !scav, !modding, !postfx.', inline: false },
            { name: '\u200b', value:'● **Armes** :', inline: false},
            { name: '<:assaut:861054281276719125>  **Assauts** :' , value: '  !m4, !hk, !mk, !rpk, !ak, !akm, !akms, !ak101, !ak103, !vepr, !dt, !val.', inline: false },
            { name: '<:weapon:861047801239830539>  **P-Mitrailleurs** :', value: '  !mpx, !mp5, !mp7, !p90, !vector.', inline: false },
            { name: '<:rifle:861050143813926943>  **Semi-Auto** :', value: '  !adar, !fal, !sr, !tx.', inline: false },
            { name: '<:sniper:861047828607270922>  **Snipes** :', value: '  !sks, !svds, !m1a, !m700, !t5000, !rsass, !mk18.', inline: false },
          )
          message.channel.send(embed)
          }
        }

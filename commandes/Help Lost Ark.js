const {  MessageEmbed } = require('discord.js')
const {MessageAttachment} = require ('discord.js')
const diceImg = new MessageAttachment ('./Images/lostark.png')

module.exports = {
    name: 'lostark',
    description: 'commandes bot',
    execute( message, args ){
      const embed = new MessageEmbed()  
          .setColor('#FDFEFE')
          .setTitle('<a:commandes:861037555301220413>᲼**Commandes :**')
          .attachFiles(diceImg)
          .setImage('attachment://lostark.png')
          .setThumbnail(message.author.avatarURL({ dynamic: true, size: 256 }))
          .addFields(          
            { name: '\u200b', value: '**!clear**᲼( supprimer messages )᲼᲼᲼᲼᲼᲼\u200b᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼', inline: false },
            { name: '<:lostark:931723577269571773>     **Lost Ark** :', value: '!berserker, !paladin, !pistolancier, !essentialiste, !elementaliste, !pugiliste, !spirite, !fusiliere, !artilleur, !franctireur, !salve, !barde, !sorciere, !demoniste, !sanguelame', inline: false },
            { name: '\u200b', value:'● **Classes** :', inline: false},   
            )
          message.channel.send(embed)
          }
        }
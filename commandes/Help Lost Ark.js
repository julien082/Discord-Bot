const {  MessageEmbed } = require('discord.js')
const {MessageAttachment} = require ('discord.js')
const diceImg = new MessageAttachment ('./Images/km.png')

module.exports = {
    name: 'lostark',
    description: 'commandes bot',
    execute( message, args ){
      const embed = new MessageEmbed()  
          .setColor('#FDFEFE')
          .setTitle('<a:commandes:861037555301220413>᲼**Commandes :**')
          .attachFiles(diceImg)
          .setImage('attachment://km.png')
          .setThumbnail(message.author.avatarURL({ dynamic: true, size: 256 }))
          .addFields(          
            { name: '\u200b', value: '**!clear**᲼( supprimer messages )᲼᲼᲼᲼᲼᲼\u200b᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼', inline: false },
            { name: '<:lostark:931723577269571773>   **Lost Ark** :', value: '!map', inline: false },
            { name: '\u200b', value:'● **Classes** :', inline: false},   
            { name: '<:assaut:861054281276719125>  **Guerriers** :' , value: '  !berserker, !paladin, !pistolancier', inline: false },
            { name: '<:weapon:861047801239830539>  **Martialistes** :', value: '  !essentialiste, !elementaliste, !pugiliste, !spirite', inline: false },
            { name: '<:rifle:861050143813926943>   **Tireurs** :', value: '  !fusiliere, !artilleur, !franctireur, !salve', inline: false },
            { name: '<:sniper:861047828607270922>  **Mages** :', value: '  !barde, !sorciere', inline: false },
            { name: '<:sniper:861047828607270922>  **Assassins** :', value: '  !demoniste, !sanguelame', inline: false }
            )
          message.channel.send(embed)
          }
        }
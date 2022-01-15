const {  MessageEmbed } = require('discord.js')
const {MessageAttachment} = require ('discord.js')
const diceImg = new MessageAttachment ('./Images/Killa.png')

module.exports = {
    name: 'lostark',
    description: 'commandes bot',
    execute( message, args ){
      const embed = new MessageEmbed()  
          .setColor('#FDFEFE')
          .setTitle('<a:commandes:861037555301220413>᲼**Commandes :**')
          .attachFiles(diceImg)
          .setImage('attachment://Killa.png')
          .setThumbnail(message.author.avatarURL({ dynamic: true, size: 256 }))
          .addFields(          
            { name: '<:tarkov:861045088900743228>  **Lost Ark** :', value: '!blade, !demonic', inline: false },
          )
          message.channel.send(embed)
          }
        }
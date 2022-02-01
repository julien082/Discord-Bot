const {  MessageEmbed } = require('discord.js')
const {MessageAttachment} = require ('discord.js')
const diceImg = new MessageAttachment ('./Images/lostark.png')

module.exports = {
    name: 'lost',
    description: 'commandes bot',
    execute( message, args ){
      const embed = new MessageEmbed()  
          .setColor('#C95305')
          .setTitle('<a:commandes:861037555301220413>᲼**Commandes :**')
          .attachFiles(diceImg)
          .setImage('attachment://lostark.png')
          .setThumbnail(message.author.avatarURL({ dynamic: true, size: 256 }))
          .addFields(          
            { name: '\u200b', value: '**!clear**᲼( supprimer messages )᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼\u200b**!help**᲼( commandes Escape From Tarkov )᲼᲼᲼᲼᲼᲼\u200b᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼᲼', inline: false },
            { name: '<:lost:931742352823955486>   **Lost Ark** :', value: '!map,  !gameplay (video toutes les classes), !site, !guides !build, !build2, !gemmes, !gardien, !donjon, !raid, !raidhl.', inline: false },
            { name: '\u200b', value:'● **Classes** :', inline: false},   
            { name: '<:guerriers:931734212980138025>  **Guerriers** :' , value: '  !berserker, !paladin (Support), !pistolancier (Tank).', inline: false },
            { name: '<:fighters:931735233961807913>  **Martialistes** :', value: '  !essentialiste, !elementiste, !pugiliste, !spirite.', inline: false },
            { name: '<:tireurs:931737222552645674>   **Tireurs** :', value: '  !fusiliere, !artilleur, !franctireur, !salve.', inline: false },
            { name: '<:mages:931737244212011078>  **Mages** :', value: '  !barde (Support), !sorciere.', inline: false },
            { name: '<:assassins:931737256367124500>  **Assassins** :', value: '  !demoniste, !blade (Sanguelame).', inline: false },
            { name: '<:triste:932109428294045776>  **Special Cruchot (pas dispo):** :', value: '  !destructeur (Tank), !lanciere, !scooter (Machiniste), !arcaniste, !invocatrice, !faucheuse, !artiste.', inline: false }
            )
          message.channel.send(embed)
          }
        }
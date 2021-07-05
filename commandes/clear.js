module.exports = {
    name: 'dada',
    description: "Clear messages!",
    async exectute(message, args){
        if(!args[0]) return message.reply("Entre le nombre de messages que tu veux supprimé")
        if(isNaN(args[0])) return message.reply("Entre un nombre con")

        if(args[0] > 10) return message.reply("Tu peux pas supprimer plus de 10 messages")
        if(args[0] < 1) return message.reply("Au moins 1 message con")

        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages);
        })
    }
}
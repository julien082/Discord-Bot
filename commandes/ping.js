module.exports = {
    name: 'ping',
    description: 'ping commande',
    execute(message, args){
        message.channel.send('pong')
    }
}
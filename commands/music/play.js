const { VoiceConnection } = require('discord.js');
const { Command, CommandoMessage } = require("discord.js-commando");
const ytld = require ('ytdl-core-discord');

module.exports = class PlayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'lire',
            group: 'music',
            memberName: 'lire',
            description: 'Lit une musique Youtube',
            args: [
                {
                    key: 'query',
                    prompt: 'Quel musique veux tu lire?',
                    type: 'string',
                }
            ]
    });
}

    /**
     * 
     * @param {CommandoMessage} message 
     * @param {string} query
     */

    async run(message, {query }) {
        await message.member.voice.channel.join().then((connection) => {
            this.runVideo(messsage, connection, query);
        });
    }
    /**
     * 
     * @param {CommandoMessage} message 
     * @param {VoiceConnection} connection 
     * @param {*} video 
     */

    async runVideo(message, connection, video) {
        connection.play( await ytld(video, { filter: 'audioonly' }));
    }
}
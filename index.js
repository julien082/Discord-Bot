const Discord = require('discord.js');
const client = new Discord.Client();


client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
  if (message.content === '!oui') {  
    message.channel.send(`https://prnt.sc/xtcole`)};
  if (message.content === '!fal') {  
    message.channel.send(`https://prnt.sc/xtcp9q`);
  }
});

client.on('message', message => {
  if (message.content === '!ak') {  
    message.channel.send(`https://prnt.sc/xtcole`);
}
});
client.on('message', message => {
  if (message.content === '!ak') {  
    message.channel.send(`https://prnt.sc/xtcole`);
}
});
client.on('message', message => {
  if (message.content === '!ak') {  
    message.channel.send(`https://prnt.sc/xtcole`);
}
});
client.on('message', message => {
  if (message.content === '!ak') {  
    message.channel.send(`https://prnt.sc/xtcole`);
}
});
client.on('message', message => {
  if (message.content === '!ak') {  
    message.channel.send(`https://prnt.sc/xtcole`);
}
});
client.on('message', message => {
  if (message.content === '!ak') {  
    message.channel.send(`https://prnt.sc/xtcole`);
}
});
client.on('message', message => {
  if (message.content === '!ak') {  
    message.channel.send(`https://prnt.sc/xtcole`);
}
});

client.login(process.env.TOKEN)
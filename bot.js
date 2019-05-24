const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("581513381073125396")
setInterval(function() {
channel.send(`walla ya wad ene 47en nase`);
}, 30)
})

client.login(process.env.BOT_TOKEN);

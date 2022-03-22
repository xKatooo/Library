const Discord = require('discord.js');
const { search, searchbt } = require('./search');
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})
client.on("ready", () => {
    console.log(`${client.user.tag} ha despertado`);
});
client.on('messageCreate', (msg) => {
    let msgArray = msg.content.split(" ");
    let command = msgArray[0].replace('b!', "");
    if (command == "search") {
        a = msg.content.replace('b!search', '');
        search(a.substring(1, ), msg);
    }
    if (command == "sbt") {
        a = msg.content.replace('b!sbt', '');
        searchbt(a.substring(1, ), msg);
    }
});
client.login(process.env.TOKEN)
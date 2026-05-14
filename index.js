const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on('messageCreate', message => {
  if (message.author.bot) return;
if (message.guild.id !=="1407703067159171123") return;
if (message.channel.id !== "1504139411221254165") return;

  const triggerWords = [
  ,"あたためて",温めて",
];

if (triggerWords.some(word => message.content.includes(word))) {
    const replies = [

  'アタタメテクダサイトイッテオマエ",
];

message.reply(replies[Math.floor(Math.random() * replies.length)]);
  }
});

client.login(process.env.token);

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
  "あ","い","う","え","お",
  "か","き","く","け","こ",
  "さ","し","す","せ","そ",
  "た","ち","つ","て","と",
  "な","に","ぬ","ね","の",
  "は","ひ","ふ","へ","ほ",
  "ま","み","む","め","も",
  "や","ゆ","よ",
  "ら","り","る","れ","ろ",
  "わ","を","ん"
];

if (triggerWords.some(word => message.content.includes(word))) {
    const replies = [

  'それってあなたの感想ですよね？',
  'なんかそういうデータあるんですか？',
  'はい、論破😂。',
  '何だろう。噓つくのやめてもらっていいですか？',
  '学校でしか学べない価値ってなんだろう、、と思ってみると、「役に立たないことに異議を唱えずにやり抜くこと」 なんじゃないかと思ったわけです',
   'ちょっと日本語わかりづらいんですけどどちらの国の方ですか？',
   'さっきと言ってること違いません？',
   '頭悪いんだからDiscordやめた方がいいっすよ',
   '僕の方が詳しいと思うんすよ',
   '根拠なしに話すのやめてもらえますか？',
   'なんかそういうのって頭悪いか、嘘つきかのどちらかですよ',
   '頭の悪い人は目立つんですよ',
   'Bot相手にイラついて恥ずかしくないの？w',
   '根拠なしに話すのやめてもらえますか？',
   'ダメだこりゃ',
   'え。言えないんすか？',
   'それはそう言う風にしか理解できない知能の問題だと思いますけどね',
   'あなたの主観ですよね？' 
];

message.reply(replies[Math.floor(Math.random() * replies.length)]);
  }
});

client.login(process.env.token);

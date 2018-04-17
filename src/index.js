require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Logged in.');
});

let counters = {};

client.on('message', ({ channel, content, author: { id, username } }) => {
  switch (content) {
    case '!ねこ':
      counters[id] = id in counters ? ++counters[id] : 1;
      const msg =
        `${username} の後ろに、${counters[id]} 匹のねこはいます。振り返ってはいけません`;
      channel.send(msg);
      break;
    case '!振り返る':
      counters[id] = 0;
      channel.send(`（≼⓪≽ ≼⓪≽）ねこです　よろしくおねがいします`);
      break;
  }
});

client.login(process.env.DISCORD_TOKEN);
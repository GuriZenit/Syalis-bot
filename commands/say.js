const Discord = require('discord.js');

module.exports.run = async (client, message, args, embed) => {
  
  const say = args.join(" ");
  
  message.delete().catch(O_o => {});
  
  message.channel.send(say);
  
}
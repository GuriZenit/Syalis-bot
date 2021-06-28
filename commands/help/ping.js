const Discord = require('discord.js');

module.exports.run = async (client, message, args, embed, config, pref) => {
  
  const embe = new Discord.MessageEmbed()
      .setColor(config.cor)
      .setAuthor("🌐 Ping")
      .setTitle("`Tempo que a mensagem leva para chegar depois do envio do comando!`")
      .addField("Exemplos:", `\n1 - ${pref}ping`)
      .addField("Apelidos:", "`pong, pingpong, pi`")
      .setFooter(`Requerido por ${message.author.username
						}`, message.author.displayAvatarURL());
  message.channel.send(embe);
}
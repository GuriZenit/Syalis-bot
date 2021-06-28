const Discord = require('discord.js');

module.exports.run = async (client, message, args, embed, config, pref) => {
  
  const embe = new Discord.MessageEmbed()
      .setColor(config.cor)
      .setAuthor("✉️ message")
      .setTitle("`Envie uma mensagem personalizada com titulo, descrição e imagem`")
      .addField("Exemplos:", `\n1 - ${pref}message\n2 - ${pref}message example`)
      .addField("Apelidos:", "`message, mensagem, me`")
      .setFooter(`Requerido por ${message.author.username
						}`, message.author.displayAvatarURL());
  message.channel.send(embe);
}
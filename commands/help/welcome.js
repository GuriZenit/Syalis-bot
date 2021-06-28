const Discord = require('discord.js');

module.exports.run = async (client, message, args, embed, config, pref) => {
  
  const embe = new Discord.MessageEmbed()
      .setColor(config.cor)
      .setAuthor("🎉 Welcome")
      .setTitle("`Escolha um canal de boas vindas para membros novos`")
      .addField("Exemplos:", `\n1 - ${pref}welcome *canal-boas-vindas*\n2 - ${pref}welcome *#boas-vindas*\n3 - ${pref}welcome *ID do canal*`)
      .addField("Apelidos:", "`bemvindo, we`")
      .setFooter(`Requerido por ${message.author.username
						}`, message.author.displayAvatarURL());
  message.channel.send(embe);
}
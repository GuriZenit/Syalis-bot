const Discord = require('discord.js');

module.exports.run = async (client, message, args, embed, config, pref) => {
  
  const embe = new Discord.MessageEmbed()
      .setColor(config.cor)
      .setAuthor("🆘 Help")
      .setTitle("`Todos os comandos disponíveis e em detalhes!`")
      .addField("Help:", `\n1 - ${pref}help\n2 - ${pref}help *help*`)
      .addField("Apelidos:", "`ajuda, commands, comandos, he`")
      .setFooter(`Requerido por ${message.author.username
						}`, message.author.displayAvatarURL());
  message.channel.send(embe);
}
const Discord = require('discord.js');

module.exports.run = async (client, message, args, embed, config, pref) => {
  
  const embe = new Discord.MessageEmbed()
      .setColor(config.cor)
      .setAuthor("⁉️ Prefix")
      .setTitle("`Escolha um peefixo personalizado para seu servidor!`")
      .addField("Exemplos:", `\n1 - ${pref}prefix *?*\n2 - ${pref}prefix *p.*`)
      .addField("Apelidos:", "`prefixo, pr`")
      .setFooter(`Requerido por ${message.author.username
						}`, message.author.displayAvatarURL());
  message.channel.send(embe);
}
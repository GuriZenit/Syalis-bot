const Discord = require('discord.js');

module.exports.run = async (client, message, args, embed, config, pref) => {
  
  const embe = new Discord.MessageEmbed()
      .setColor(config.cor)
      .setAuthor("⚙️ Settings")
      .setTitle("`Configurações atuais desse servidor`")
      .addField("Exemplos:", `\n1 - ${pref}settings`)
      .addField("Apelidos:", "`configuração, definição, se`")
      .setFooter(`Requerido por ${message.author.username
						}`, message.author.displayAvatarURL());
  message.channel.send(embe);
}
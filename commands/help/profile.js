const Discord = require('discord.js');

module.exports.run = async (client, message, args, embed, config, pref) => {
  
  const embe = new Discord.MessageEmbed()
      .setColor(config.cor)
      .setAuthor("🔖 profile")
      .setTitle("`Personalize! seu perfil com uma bio e foto de capa!`")
      .addField("Exemplos:", `\n1 - ${pref}profile`)
      .addField("Apelidos:", "`profile, pf, perfil`")
      .setFooter(`Requerido por ${message.author.username
						}`, message.author.displayAvatarURL());
  message.channel.send(embe);
}
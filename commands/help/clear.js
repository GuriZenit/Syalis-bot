const Discord = require('discord.js');

module.exports.run = async (client, message, args, embed, config, pref) => {
  
  const embe = new Discord.MessageEmbed()
      .setColor(config.cor)
      .setAuthor("🗑️ Clear")
      .setTitle("`Limpa varias mensagens, com um único comando até 100 mensagens são limpas!`")
      .addField("Exemplos:",`\n1 - ${pref}clear *10*\n2 - ${pref}clear *100*`)
      .addField("Apelidos:", "`delete, limpar, apagar, cl`")
      .setFooter(`Requerido por ${message.author.username
						}`, message.author.displayAvatarURL());
  message.channel.send(embe);
}
const Discord = require('discord.js');

module.exports.run = async (client, message, args, embed, config, pref) => {
  
  const embe = new Discord.MessageEmbed()
      .setColor(config.cor)
      .setAuthor("🖼️ Avatar")
      .setTitle("`Envia a sua foto do perfil ou da pessoa que for mencionada por você!`")
      .addField("Exemplos:", `\n1 - ${pref}avatar\n2 - ${pref}avatar ${message.author}`)
      .addField("Apelidos:", "`pic, foto, av`")
      .setFooter(`Requerido por ${message.author.username
						}`, message.author.displayAvatarURL());
  message.channel.send(embe);
}
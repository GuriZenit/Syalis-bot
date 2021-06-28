const Discord = require('discord.js');

module.exports.run = async (client, message, args, embed, config, pref) => {
  
  const embe = new Discord.MessageEmbed()
      .setColor(config.cor)
      .setAuthor("🗣️ Say")
      .setTitle("`Repete a frase enviada por você!`")
      .addField("Exemplos:", `\n1 - ${pref}say *sua mensagem aqui que será reenviada por mim!*`)
      .addField("Apelidos:", "`repeat, repete, diga, speak, fale, sa`")
      .setFooter(`Requerido por ${message.author.username
						}`, message.author.displayAvatarURL());
  message.channel.send(embe);
}
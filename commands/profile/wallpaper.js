{
	const Discord = require('discord.js');
	const embed = new Discord.MessageEmbed();
	module.exports.run = async (client, message, args, attachment) => {

		if (!args.join(" ")) return message.channel.send(embed.setDescription("Você precisa enviar o link da imagem, arquivo não vai funcionar!").setColor("RED"));
		
		if (!args.join(" ").startsWith("http")) return message.channel.send(embed.setDescription("Não sei o que enviou mas não é um link de uma imagem!").setColor("RED"));
		
		client.enp.set(message.author.id, args.join(' '), 'image')
		
		message.delete().catch(O_o => {});
		message.reply(embed.setDescription("Perfil atualizado 💖").setColor(process.env.COR))
	}
}
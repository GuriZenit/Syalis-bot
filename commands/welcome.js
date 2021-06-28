{
	module.exports.run = async (client, message, args, embed) => {
		
		if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply("",embed.setDescription("Você não têm permissão para usar esse comando 🚫").setColor("RED"));
		
		const channel = message.guild.channels.cache.find(ch => ch.id == args || ch.name == args || '<#'+ch.id+'>' == args);
		
		if (args == "") return message.channel.send(embed.setDescription("Você precisa especificar o canal desejado!").setColor('RED'));
		
		if (args == "false") return message.channel.send(embed.setDescription("Mensagens de boas vindas desligada!"));
		
	    if (!channel) return message.channel.send(embed.setDescription("Canal não encontrado!").setColor('RED'));
		
		client.settings.set(message.guild.id, channel, 'welcomeCh');
		
		message.channel.send(embed.setDescription(`Canal de boas vindas alterado para : ${channel}`));
	}
}
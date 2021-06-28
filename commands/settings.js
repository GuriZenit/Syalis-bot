{
	module.exports.run = async (client, message, args, embed) => {
		
		if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply("",embed.setDescription("Você não têm permissão para usar esse comando 🚫").setColor("RED"));
		
		const prefix  = client.settings.get(message.guild.id, 'prefix');
		
		const welcomeChannel = client.settings.get(message.guild.id, 'welcomeCh')
		
		message.channel.send(embed.setTitle(`Configurações atuais`).setDescription(`**Prefixo:** ${prefix}\n**Canal de boas vindas:** ${welcomeChannel.name}`).setFooter(`Requerido por ${message.author.tag}`, message.author.avatarURL()));
 		
	}
}
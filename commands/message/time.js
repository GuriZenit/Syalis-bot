{
	const Discord = require('discord.js');
	const embed = new Discord.MessageEmbed();
	module.exports.run = async (client, message, args) => {
	
		if (!args.join(" ")) return message.channel.send(embed.setDescription("VocÃª precisa enviar on ou off!")) &&
			message.react("ð");
			
		const value = args.shift().toLowerCase();
		
		if (value == "on") {
			client.sms.set(message.guild.id, message.createdAt, 'time')
			message.react("ð")
		}
		else if (value == "off") {
			client.sms.set(message.guild.id, false, 'time')
			message.react("ð")
		}
		else{
			
		}
	}
}
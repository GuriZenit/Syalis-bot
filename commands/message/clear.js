{
	const Discord = require('discord.js');

	module.exports.run = async (client, message, args) => {
	
		function gets (value){
			return client.sms.get(message.guild.id, value);
		}
		
		const embed = new Discord.MessageEmbed();
	
		if (gets("title") == '' && gets("text") == '' && gets("image") == '') return message.channel.send(embed.setDescription("VocÃª nÃ£o tem mensagem salva!").setColor("RED")) && message.react("ð");
		
		if (!args.join(" ")) return message.channel.send(embed.setTitle("Message clear").setDescription("Use `clear all` para limpar tudo, ou um desses valores: `title, text, image`").setColor(process.env.COR));
		
		
		function dell (value){
			client.sms.delete(message.guild.id, value)
		}
		
		switch(args.shift().toLowerCase()){
			case 'title':
				dell('title');
				message.react("ð");
				break;
			case 'text':
				dell('text');
				message.react("ð");
				break;
			case 'image':
				dell('image');
				message.react("ð");
				break;
			case 'all':
				client.sms.delete(message.guild.id);
				message.react("ð");
				break;
            default:
                message.react("ð");
		}

	}
}
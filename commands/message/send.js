{
	const Discord = require('discord.js');

	module.exports.run = async (client, message, args) => {
		function gets(value) {
			return client.sms.get(message.guild.id, value);
		}

		const embed = new Discord.MessageEmbed();

		if (gets('title') == '' && gets('text') == '' && gets('image') == '')
			return (
				message.channel.send(
					embed.setDescription('Você não tem mensagem salva!').setColor('RED')
				) && message.react('💔')
			);
			
		try{
			
		embed
			.setTitle(gets('title'))
			.setDescription(gets('text'))
			.setImage(gets('image'))
			.setColor(gets('color'))
			.setTimestamp(gets('time'));
		}catch(err){
			const corbed = new Discord.MessageEmbed();
			return message.channel.send(corbed.setDescription("Cor inválida, envie o nome da cor em inglês, exemplo: `ORANGE, BLUE, RED` ou você pode enviar o código HEX exemplo: `#880433`, sem transparência (Os dois `FF` à frente do código)!").setColor("RED"))
		}
		
			
		if (!args.join(' ')) return message.channel.send(embed);

		const a = args.join(' ');

		const canal = message.guild.channels.cache.find(
			ch => ch.id == a || ch.name == a || '<#' + ch.id + '>' == a
		);
		
		const emcanal = new Discord.MessageEmbed();
		if (!canal)
			return (
			 
				message.channel.send(
					emcanal.setDescription('Canal não encontrado!').setColor('RED')
				) && message.react('💔')
			);

		canal.send(embed);
		const emsend = new Discord.MessageEmbed();
		message.channel.send(
			emsend
				.setDescription(`Mensagem enviada para o canal ${canal}`)
				.setColor(process.env.COR)
		);
		
	};
}

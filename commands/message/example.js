{
	const Discord = require("discord.js")
	const embed = new Discord.MessageEmbed();
	
	module.exports.run = async (client, message, args) => {
		
		embed.setTitle('Olá eu sou Syalis')
		.setDescription('Esse é um exemplo da mensagem personalizada embed, esse local é a descrição, acima onde me apresento é o título e abaixo a imagem.')
		.setImage('https://i.imgur.com/yL8XYZu.jpg')
		.setColor(process.env.COR)
		.setTimestamp();
		message.channel.send(embed)
	}
}
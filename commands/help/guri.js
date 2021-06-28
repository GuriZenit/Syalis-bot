const Discord = require('discord.js');

module.exports.run = async (client, message, args, embed, config, pref) => {
	const embe = new Discord.MessageEmbed()
		.setColor(config.cor)
		.setAuthor('🤴 GuriZenit')
		.setTitle('`Olá! eu sou o criador da Syalis, pelo menos esse bot.`')
		.addField('Contato:', 'gurizenit@gmail.com')
		.addField(
			'Redes:',
			'[Twitter](http://twitter.com/GuriZenit/)\n[MyAnimeList](https://myanimelist.net/profile/GuriZenit/)'
		)
		.setFooter(
			`Requerido por ${message.author.username}`,
			message.author.displayAvatarURL()
		);
	message.channel.send(embe);
};

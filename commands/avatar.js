{
	const Discord = require('discord.js');

	module.exports.run = async (client, message, args, embed) => {
		const user = message.mentions.users.first() || message.author;

		const avatar = user.avatarURL({ format: 'png', dynamic: true, size: 2048 });

		if (user.id == client.user.id) {
			embed.setDescription('Gostou da minha foto? 🥰');
		}

		message.reply(
			' ',
			embed
				.setAuthor(user.username)
				.setImage(avatar)
				.setFooter('ID: ' + user.id)
				.setTimestamp()
		);
	};
}

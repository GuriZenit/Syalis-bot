{
	module.exports.run = async (client, message, args) => {
		if (!args.join(' '))
			return (
				client.enp.set(message.author.id, ' ', 'bio') && message.react('💖')
			);

		client.enp.set(message.author.id, args.join(' '), 'bio');
		message.delete().catch(O_o => {});
		message.reply("Perfil atualizado 💖")
	};
}
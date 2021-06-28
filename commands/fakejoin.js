{
	module.exports.run = async (client, message, args) => {
		if (message.author.hasPermission('ADMINISTRATOR')) return;
		client.emit('guildMemberAdd', message.member);
	}
}
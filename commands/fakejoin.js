{
	module.exports.run = async (client, message, args) => {
		if (message.author.hasPermissions('ADMINISTRATOR')) return;
		client.emit('guildMemberAdd', message.member);
	}
}
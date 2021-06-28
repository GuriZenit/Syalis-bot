{
	module.exports.run = async (client, message, args) => {
		if (message.member.hasPermission('ADMINISTRATOR')) return;
		client.emit('guildMemberAdd', message.member);
	}
}
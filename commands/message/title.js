{
	module.exports.run = async (client, message, args) => {
		
		if (!args.join(" ")) return message.react("💔")
		
		client.sms.set(message.guild.id, args.join(" "), 'title')
	
		message.react('💖')
	}
}
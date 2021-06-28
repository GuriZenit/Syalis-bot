{
	module.exports.run = async (client, message, args, attachment) => {
		
		if(!args.join(' ')) return;
		
		const command = args.shift().toLowerCase();
		
		client.enp.set(message.author.id, command, 'fontColor')
	
		message.delete().catch(O_o => {});
		message.reply("Perfil atualizado 💖")
	}
		
}
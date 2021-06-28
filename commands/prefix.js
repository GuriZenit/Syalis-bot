{
	module.exports.run = async (client, message, args, embed, config, pref) => {
		
	  if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply("",embed.setDescription("Você não têm permissão para usar esse comando 🚫").setColor("RED"));
		
	  if (args == "") {
	  	
	    message.channel.send(embed.setDescription("Você precisa digitar o prefixo desejado!"));
	    
	  }else{
	  	
	   const pre = args.join(" ");
	   
	   client.settings.set(message.guild.id, pre, 'prefix');
	  
	   const prefix = client.settings.get(message.guild.id, 'prefix');
	   
		message.channel.send(embed.setDescription(`prefixo alterado para: `+ "`" + prefix + "`"));
	  }
	}
}
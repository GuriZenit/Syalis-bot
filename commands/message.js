{
	const Discord = require('discord.js');
	const Enmap = require('enmap');
	
	module.exports.run = async (client, message, args, embed, config, pref) => {
		
	if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("",embed.setDescription("Você não têm permissão para usar esse comando 🚫").setColor("RED"));
	
	embed.setTitle("✉️ Mensagem")
	.setDescription("`Envie uma mensagem no canal escolhido, com o formato embed, use os comandos abaixo para personalizar sua mensagem!`")
	.addFields([
		{
			name: `${pref}message title <titulo>`,
			value: "`(opcional) Define o título da sua mensagem.`"
		},
		{
			name: `${pref}message text <descrição>`,
			value: "`Define a descrição da sua mensagem.`"
		},
		{
			name: `${pref}message image <link>`,
			value: "`(opcional) Define a imagem da sua mensagem.`"
		},
		{
			name: `${pref}message color <#HEX>`,
			value: "`(opcional) Define a cor do embed, você pode enviar o nome da cor em caixa alta. exemplo: BLUE`"
		},
		{
			name: `${pref}message time <on | off>`,
		    value: "`Define o tempo que a mensagem foi enviada no rodapé da mensagem.`"
		},
		{
			name: `${pref}message send <#canal>`,
			value: "`Envia a mensagem no canal selecionado. Enviarei no canal atual caso não especifique!`"
		},
		{
			name: `${pref}message clear <value>`,
			value: "`Limpa um dos valores, use <clear all>. para limpar tudo!`"
		}
	]).setFooter("Reações significam: certo 💖 | errado 💔!")
	
	if(!args.join(" ")) return message.channel.send(embed);
	
    client.sms = new Enmap({
		name: 'sms',
		fetchAll: false,
		autoFetch: true,
		cloneLevel: 'deep'
	});
	const cor = process.env.COR;
	const defaultSms = {
		title: '',
		text: '',
		image: '',
		color: cor,
		time: false
	}
	
	client.sms.ensure(message.guild.id, defaultSms);
	
	const command = args.shift().toLowerCase();
	
	try{
		require(`./message/${command}.js`).run(client, message, args)
	}catch(err){
		const errbed = new Discord.MessageEmbed();
		message.channel.send(errbed.setDescription("Não entendi!").setColor("RED"))
		message.react("💔")
	}
  }
}
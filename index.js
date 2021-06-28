{
	const Discord = require('discord.js');
	const client = new Discord.Client();
	const config = require('./config');
	const Enmap = require('enmap');

	client.settings = new Enmap({
		name: 'settings',
		fetchAll: false,
		autoFetch: true,
		cloneLevel: 'deep'
	});

	const defaultSettings = {
		prefix: config.prefix,
		welcomeCh: 'false'
	};

	client.on('guildDelete', guild => {
		client.settings.delete(guild.id);
		client.sms.delete(guild.id)
	});

	client.on('guildMemberAdd', member => {
		client.settings.ensure(member.guild.id, defaultSettings);

		let welcomeChannel = client.settings.get(member.guild.id, 'welcomeCh');

		const channel = member.guild.channels.cache.find(
			ch =>
				ch.id == welcomeChannel.id ||
				ch.name == welcomeChannel.name ||
				'<#' + ch.id + '>' == '<#' + welcomeChannel.id + '>'
		);

		if (!channel) return;

		welcomeFile = require('./actions//welcome');

		welcomeFile.run(channel, member);
	});
	client.on('message', message => {
		const embed = new Discord.MessageEmbed().setColor(config.cor);
	    
		if (message.author.bot) return;

		if (message.channel.type == 'dm') return;
		
		client.settings.ensure(message.guild.id, defaultSettings);
		
        const pref = client.settings.get(message.guild.id, 'prefix');

		if (
			message.content.startsWith(`<@!${client.user.id}>`) ||
			message.content.startsWith(`<@${client.user.id}>`)
		)
			return message.reply(
				'',
				embed.setDescription(
					`Olá **${
						message.author.username
					}**, meu prefixo nesse  servidor é : **${pref}**`
				)
			);

		if (!message.content.toLowerCase().startsWith(pref.toLowerCase())) return;

		const args = message.content
			.trim()
			.slice(pref.length)
			.split(/ +/g);

		const command = args.shift().toLowerCase();
		try {
			const commandFile = require(`./commands/${command}.js`)

			commandFile.run(client, message, args, embed, config, pref);
		} catch(err) {
			
			require('./aliases.js').run(client, message, args, embed, config, pref, command);
			
		}
	});

	require('./server')();

	client.login(config.token);
	client.on('ready', () => {
		require('./actions//presence.js').run(client, config);
	});
}
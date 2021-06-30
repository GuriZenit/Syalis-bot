const Discord = require('discord.js');

module.exports = {
	run: (client, message, args, embed, config, pref) => {
		const p = pref;

		const e = embed
			.setAuthor('Ajuda', client.user.avatarURL())
			.setDescription('`Normais`')
			.addFields([
				{
					name: `${p}help <comando>`,
					value: '`Descrição detalhada do comando em que há dúvida!`'
				},
				{
					name: `${p}avatar <@menção>`,
					value: '`Mostro o seu avatar ou da pessoa mencionada!`'
				},
				{
					name: `${p}perfil`,
					value: '`Mostra o seu perfil!`'
				},
				{
					name: `${p}ping`,
					value: '`Tempo entre o envio e a resposta do comando em MS!`'
				},
				{
					name: '\u200B',
					value: '`Administração`',
					inline: true
				},
				{
					name: `${p}clear <quantidade>`,
					value: '`Limpa até 100 mensagens anteriores!`'
				},
				{
					name: `${p}prefix <prefixo>`,
					value: '`Muda o prefixo nesse servidor!`'
				},
				{
					name: `${p}welcome <#channel>`,
					value: '`Escolha um canal para dar boas vindas a novos membros!`'
				},
				{
					name: `${p}message`,
					value: '`Envie uma mensagem personalizada!`'
				},
				{
					name: `${p}settings`,
					value: '`Configurações atuais do servidor!`'
				}
			]);

		if (!args.join(' ')) return message.reply('', e);

		const command = args.shift().toLowerCase();
		//	console.log(command);
		try {
			const helpFile = require(`./help/${command}.js`);

			helpFile.run(client, message, args, embed, config, pref);
		} catch (err) {
			function run(nome) {
				require(`./help/${nome}`).run(
					client,
					message,
					args,
					embed,
					config,
					pref
				);
			}

			switch (command) {
				case 'pic':
				case 'foto':
				case 'icon':
				case 'av':
					run('avatar');
					break;

				case 'ajuda':
				case 'comandos':
				case 'commands':
				case 'he':
					run('help');
					break;

				case 'pong':
				case 'pingpong':
				case 'pi':
					run('ping');
					break;

				case 'fale':
				case 'diga':
				case 'speak':
				case 'repeat':
				case 'repete':
				case 'sa':
					run('say');
					break;

				case 'delete':
				case 'apagar':
				case 'limpar':
				case 'cl':
					run('clear');
					break;

				case 'prefixo':
				case 'pr':
					run('prefix');
					break;

				case 'bemvindo':
				case 'we':
					run('welcome');
					break;

				case 'configuração':
				case 'definição':
				case 'config':
				case 'se':
					run('settings');
					break;

				case 'mensagem':
				case 'embed':
				case 'me':
					run('message');
					break;
					
				case 'perfil':
				case 'pf':
				case 'pr':
				case 'profile':
				   run('profile');
				   break;

				case '<@415395123086491658>':
					run('guri');
					break;
				default:
					const errbed = new Discord.MessageEmbed()

						.setDescription(
							`**${command}** não encontrado na lista de comandos!`
						)
						.setColor('RED');

					message.reply('', errbed);

					break;
			}
		}
	}
};

{
	module.exports.run = async (client, config) => {
		
		let types;
		types = [ { type: 2 }, { type: 3 } ];

		let activities = [`@Syalis`, 'Maoujou de Oyasumi'],
		
		i = 0;
		b = 0;

		setInterval(
			() =>
				client.user.setActivity(
					`${activities[i++ % activities.length]}`,
					types[b++ % types.length]
				),
			1000 * 15
		);

		client.user.setStatus('online').catch(console.error);

		console.log(`//////////////////////////////\nClient: ${client.user.tag}\nStatus: ${client.presence.status}\n//////////////////////////////`);
	};
}
{
	const Discord = require('discord.js');
	const Canvas = require('canvas');
	const enmap = require('enmap');
	const { registerFont } = require('canvas');
    
	module.exports.run = async (client, message, args) => {
		client.enp = new enmap({ name : 'profile'})
		
		let enpConfig = {
		    image: 'https://i.imgur.com/dDeqOSw.jpg',
			fontColor: '#ffffff',
			bio: 'Comando "profile wallpaper <image link>"   para trocar a capa. "profile bio <sua bio>"para mudar essa bio!'
		}
		client.enp.ensure(message.author.id, enpConfig)
		
		function gets (value){
			return client.enp.get(message.author.id, value)
		}
		
		function getWrapText(text, length) {
			
            const temp = [];
            for (let i = 0; i < text.length; i += length){
            	temp.push(text.slice(i, i + length));
            }
            return temp.map(x => x + '\n' );
        }
        
        function g(int){
        	return getWrapText(gets('bio'), 43)[int];
        }
		function ge(){
			if(!g(1)){
				return getWrapText(gets('bio'), 43)[0]
	     	}
	    	if(!g(2)){
	    		return getWrapText(gets('bio'), 43)[0] +    getWrapText(gets('bio'), 43)[1];
	    	}
	    	return getWrapText(gets('bio'), 43)[0] +
	    	       getWrapText(gets('bio'), 43)[1] +
	    	       getWrapText(gets('bio'), 43)[2]
		}
		const canvas = Canvas.createCanvas(800, 450);
		const ctx = canvas.getContext('2d');
		const background = await Canvas.loadImage(gets('image'));
		
		ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
	    
	    const semiground = await Canvas.loadImage('https://i.imgur.com/UMhaBXv.png');
	    
	    ctx.drawImage(semiground, 240, 225, 535, 85)
	    ctx.drawImage(semiground, 240, 325, 535, 100)
	    
	    registerFont('./IBMPlexMono-SemiBold.ttf', { family: 'Roboto-Bold' });
	    ctx.font = '30px Roboto-Bold';
	    
    	ctx.fillStyle = gets('fontColor');
    	
    	const tag = message.author.username
    	
   	    ctx.fillText(tag, 250, 260);
   	    
   	    const dados = message.author.id
			
   	    ctx.font = '20px Roboto-Bold';
 
   	    ctx.fillText('ID:'+dados , 250, 290);
   	    
   	    const bio = ge();
   	    
   	    ctx.font = '20px Roboto-Bold';
   	    
   	    ctx.fillText(bio, 250, 350)
   	    
		const avatar = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'jpg', size: 1024}));
		
		ctx.drawImage(avatar, 25, 225, 200, 200);
		
		const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'profile-image.png');
		
		if (!args.join(' ')) return message.channel.send(attachment);
		
		const command = args.shift().toLowerCase();
		
		try{
		require(`./profile/${command}.js`).run(client, message, args, attachment);
		}catch(err){
			console.log(err)
		}
	}
}
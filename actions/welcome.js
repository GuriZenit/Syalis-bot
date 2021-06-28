{
  const Discord = require('discord.js');
  const Enmap = require('enmap');
  const en = new Enmap({ name: 'numero'});
  
  module.exports.run = async (channel, member) => {
  	
  	en.ensure(channel.id, 0)
  	
    let images = ['https://i.imgur.com/o9hAQxE.gif',
                  'https://i.imgur.com/Yjy07Kx.gif',
                  'https://i.imgur.com/8gPk9EZ.gif',
                  'https://i.imgur.com/67bc5Lg.gif',
                  'https://i.imgur.com/xPcIupG.gif',
                  'https://i.imgur.com/MjDVo9w.gif',
                  'https://i.imgur.com/55P8IL5.gif',
                  'https://i.imgur.com/eoCAyYU.gif'];
    
    if (channel.name == "false") return;
    
    const welbed = new Discord.MessageEmbed()
      .setColor(process.env.COR)
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`Bem vindo(a)!`)
      .setDescription(`${member.user.username} bem vindo(a) ao ${member.guild}`)
      .setImage(images[en.get(channel.id)])
      .setTimestamp();
      
    channel.send(member,welbed);
    
    en.set(channel.id, en.get(channel.id) + 1);
    
    if (en.get(channel.id) >= images.length){
    
    	en.set(channel.id, 0);
    }
  }
}
const Discord = require("discord.js");

module.exports = {
  
  name: "ping",
  aliases: ["pong"],
  category: "Utility",
  usage: "ping",
  description: "Get the bot's ping!",
  run: async (client, message, args, embed) => {
                

    let start = Date.now();
  
    message.channel.send({embed: {description: "Estou lenta tente novamente 😕", color: "RED"}}).then(m => {
                        
                
      let end = Date.now();
                
      embed.setAuthor("Ping!", message.author.avatarURL())
    
      .addField("Latência API", Math.round(client.ws.ping) + "ms", true)
    
      .addField("Latência de mensagem", end - start + "ms", true)
    
       m.edit(embed).catch(e => message.channel.send(e))
    
      })

    }

};
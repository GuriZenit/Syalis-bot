const Discord = require('discord.js');

 module.exports = {
   
   name: 'clear!',
   category: "moderação",
   usage: "clear <how-many-messages>",
   description: "delete messages",
   run: async (client, message, args, embed) => {
           
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("",embed.setDescription("Você não têm permissão para usar esse comando 🚫").setColor("RED"));
    
    if(!args[0]) return message.reply("",embed.setDescription('Eu preciso saber a quantidade de mensagens que você deseja apagar! 😕').setColor("RED"));
    
    if(isNaN(args[0])) return message.reply("",embed.setDescription('Isso não é um número! 😡').setColor("RED"));

    if(args[0] > 100) return message.reply("",embed.setDescription('Só posso apagar até 100 mensagens 🥺').setColor("RED"));
  
    if(args[0] < 2) return message.reply("",embed.setDescription('Só isso? acho que você consegue fazer! 🤬').setColor("RED"));
    
    await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
        
     message.channel.bulkDelete(messages).catch(error => console.log(`Menssagens não apagadas! ${error}`));
        
    message.channel.send(embed.setDescription(`${args[0]} mensagens limpas! 🗑️`));
    
    });
   }}
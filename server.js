{
  const app = require('express')();
 
  app.get('/', (req, res) => {
  
		const ping = new Date();

		ping.setHours(ping.getHours() - 3);
		
		res.send(`Bot online agora : ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
		
  });
  
   app.listen(process.env.PORT);

   module.exports = () => {
      app.listen(3000);
 
  };
	
}
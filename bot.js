const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log('I am ready!');
  bot.user.setPresence({ game: { name: 'Despacito [ n!help ]', type: 0 } })
});

const prefix ="n!"



bot.on('message', message => {
  if(message.author.bot)return;



if(message.content.toLowerCase().includes( ['bepsi'] ) || message.content.toLowerCase().includes( ['pepsi'] ) ){
       message.react(":bepsi:403237730919645224");
   }

 
if(message.content.toLowerCase().includes( ['this is so'] ) && message.content.toLowerCase().includes( ['nishida play'] ) ){

    if(message.content.toLowerCase().includes( ['24'] )){
    message.channel.send("https://a.tumblr.com/tumblr_pbkv6cXucB1xv33e9o1.mp3","24 Hour Cinderella.mp3" )
    } 

}  
  
  

});







bot.login(process.env.BOT_TOKEN);

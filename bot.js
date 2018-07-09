const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log('I am ready!');
  bot.user.setPresence({ game: { name: 'Despacito [ n!help ]', type: 0 } })
});

const prefix ="n!"



bot.on('message', message => {
  if(message.author.bot)return;

        if(message.member.roles.find("name", "Officer")){
        var person="boss";
        }     
        else if(message.member.roles.find("name", "she/her")){
        var person="madam";
        } 
        else if(message.member.roles.find("name", "he/him")){
        var person="sir";
        }
        else {
        var person="captain";
        }
  
  

if(message.content.toLowerCase().includes( ['bepsi'] ) || message.content.toLowerCase().includes( ['pepsi'] ) ){
       message.react(":bepsi:403237730919645224");
   }

 
if(message.content.toLowerCase().includes( ['this is so'] ) && message.content.toLowerCase().includes( ['nishida play'] ) ){

    if(message.content.toLowerCase().includes( ['24'] )){
        message.channel.send("Here you go, " + person +"!");    
        message.channel.sendFile("https://a.tumblr.com/tumblr_pbkv6cXucB1xv33e9o1.mp3","24 Hour Cinderella.mp3" )
    } 

}
  
  
if(message.content.toLowerCase().startsWith( ['hey nishida'] )){
    message.channel.send("Yes, " + person +"?");    
    
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
    console.log(collector)
    collector.on('collect', message => {
        if (message.content.toLowerCase().includes( ['kill me'] )) {
            message.channel.send("I shouldn't do that.");
        } else if (message.content.toLowerCase().includes( ['play despacito'] )) {
            message.channel.send("<https://www.youtube.com/watch?v=kJQP7kiw5Fk>");
        }
    })


} 
  
  
  
  

});







bot.login(process.env.BOT_TOKEN);

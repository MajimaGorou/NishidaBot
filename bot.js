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
  
  
if (message.content.startsWith(prefix + "hey nishida"))  {
    if(message.member.roles.find("name", "she/her")){
        message.channel.send("Yes, madam!");
    } 
    else if(message.member.roles.find("name", "he/him")){
        message.channel.send("Yes, sir!");
    }
    else {
        message.channel.send("Yes, captain!");
    }
}
  
  
  
  

});







bot.login(process.env.BOT_TOKEN);

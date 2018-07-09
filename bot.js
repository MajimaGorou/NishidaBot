const Discord = require('discord.js');
const bot = new Discord.Client();


var search = require('youtube-search');
 
var opts = {
  maxResults: 1,
  key: process.env.BOT_API
};
 




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

if(message.content.toLowerCase().includes( ['pee'] ) || message.content.toLowerCase().includes( ['piss'] ) ){
       message.react("⛔");
   } 
 
 
if(message.content.toLowerCase().includes( ['this is so'] ) && message.content.toLowerCase().includes( ['nishida play'] ) ){

    if(message.content.toLowerCase().includes( ['24'] )){
        message.channel.send("Here you go, " + person +"!");    
        message.channel.sendFile("https://a.tumblr.com/tumblr_pbkv6cXucB1xv33e9o1.mp3","24 Hour Cinderella.mp3" )
    } 

}
  
 
var iluvu = ["i love you", "i love u","i luv u"  ,"i love ya" , "i luv ya" , "i luv you"]; 
 
  
if(message.content.toLowerCase().startsWith( ['hey nishida'] )){
    message.channel.send("Yes, " + person +"?");    
    
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 30000 });
    console.log(collector)
    collector.on('collect', message => {
        if (message.content.toLowerCase().includes( ['kill me'] )) {
            message.channel.send("I shouldn't do that.");
        } else if (message.content.toLowerCase().startsWith( ['play'] )) {
            var saying= message.cleanContent.replace("play", " ")
    search(saying, opts, function(err, results) {
        if(err) return console.log(err);
      message.channel.sendMessage(results[0].link);
     message.react("👌");
      console.log(results); 
      });
        } else for (var i = 0; i < iluvu.length; i++) {
            if (message.content.toLowerCase().includes( iluvu[i] )) {
                message.react("💛");
            
              break;
            }
          }
    })


} 
  
 
  
  
  

});







bot.login(process.env.BOT_TOKEN);

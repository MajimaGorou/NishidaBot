const Discord = require('discord.js');
const bot = new Discord.Client();


var search = require('youtube-search');
 
var opts = {
  maxResults: 1,
  key: process.env.BOT_API
};
 




bot.on('ready', () => {
  console.log('I am ready!');
  bot.user.setPresence({ game: { name: '24h Cinderella [ n!help ]', type: 0 } })
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
var doyou = ["Yes!", "Yes.","Maybe?"  ,"I don't know." , "I shouldn't answer that." , "I guess?" ,"No.","No!", "Yeah, sure!", "No way!" ,"Of course!","Boss doesn't want us talking about that.", "No!", "Why would you ask me this..."  ,"W-what!?"];
var badquestions = ["Boss doesn't want us talking about that.", "No!", "Why would you ask me this..."  ,"W-what!?"]; 
  

if(message.content.toLowerCase().startsWith( ['hey nishida'] )){
    message.channel.send("Yes, " + person +"?");    
    
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 30000 });
    console.log(collector)
    collector.on('collect', message => {
        if (message.content.toLowerCase().includes( ['kill me'] )) {
            message.channel.send("I shouldn't do that.");
        } else if (message.content.toLowerCase().startsWith( ['do'] ) || message.content.toLowerCase().startsWith( ['would'] ) || message.content.toLowerCase().startsWith( ['will'] ) || message.content.toLowerCase().startsWith( ['can'] ) || message.content.toLowerCase().startsWith( ['is'] ) || message.content.toLowerCase().startsWith( ['are'] ) && message.content.toLowerCase().endsWith( ['?'] )) {

            if (message.content.toLowerCase().includes( ['pee'] ) || message.content.toLowerCase().includes( ['piss'] )) {
            
                message.channel.send(badquestions[Math.floor(Math.random()*badquestions.length)]);
            } else {
            message.channel.send(doyou[Math.floor(Math.random()*doyou.length)]);}
        } else if (message.content.toLowerCase().startsWith( ['play'] )) {
            var saying= message.cleanContent.replace("play", " ")
    search(saying, opts, function(err, results) {
        if(err) return console.log(err);
      message.channel.sendMessage(results[0].link);
      console.log(results); 
      });
        } else if(message.content.toLowerCase().includes( ['jail'] )){
            if (message.member.roles.find("name", "Officer")) {
                let userToModify = message.mentions.members.first();
            let roleToAdd = "449125335498358785";
            let roleToRemove ="449129637092524033";
            userToModify.addRole(roleToAdd)
            .then(msg => { 
                
                setTimeout(function () {
                    userToModify.removeRole(roleToRemove);
                    message.channel.send("Done, boss!")
                  }, 100);
                 } )
            } else { message.channel.send("You're not the boss!") }
        } else if(message.content.toLowerCase().includes( ['free'] )){
            if (message.member.roles.find("name", "Officer")) {
                let userToModify = message.mentions.members.first();
            let roleToAdd = "449129637092524033";
            let roleToRemove ="449125335498358785";
            userToModify.addRole(roleToAdd)
            .then(msg => { 
                
                setTimeout(function () {
                    userToModify.removeRole(roleToRemove);
                    message.channel.send("Done, boss!")
                  }, 100);
                 } )
            }
        }
        else for (var i = 0; i < iluvu.length; i++) {
            if (message.content.toLowerCase().includes( iluvu[i] )) {
                message.react("💛");
            
              break;
            }
          } 
        
    })


} 

  
 
  
  
  

});







bot.login(process.env.BOT_TOKEN);

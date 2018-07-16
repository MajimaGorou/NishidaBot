const Discord = require('discord.js');
const bot = new Discord.Client();


var search = require('youtube-search');
 
var opts = {
  maxResults: 1,
  key: process.env.BOT_API
};
 

bot.on('guildMemberAdd', member => {

    var intromessage = ["Oh, we have a new member! Welcome to the **Majima Family**, " + member.user + "!" ,
    member.user + " has joined the **Majima Family**! ",
     "Eveybody, we have a new member! Welcome, " + member.user + ", to the **Majima Family**!"];

    member.guild.channels.get('450914187472797697').send(  intromessage[Math.floor(Math.random()*intromessage.length)] + " Please read the rules in the <#449099915860246531> channel and **introduce yourself here** to get complete access to the server!"); 
});



bot.on('ready', () => {
  console.log('I am ready!');
  bot.user.setPresence({ game: { name: '24h Cinderella [ n!help ]', type: 0 } })
});

const prefix ="n!"



bot.on('message', message => {
  if(message.author.bot)return;

        if(message.member.roles.find("name", "Officer")){
        var person="boss";
        var pronoun="himself";
        }     
        else if(message.member.roles.find("name", "she/her")){
        var person="madam";
        var pronoun="herself";
        } 
        else if(message.member.roles.find("name", "he/him")){
        var person="sir";
        var pronoun="himself";
        }
        else {
        var person="captain";
        var pronoun="themselves";
        }
  
if(message.content.toLowerCase().includes( ['welcome'] )){
            if (message.member.roles.find("name", "Mods")) {
                let userToModify = message.mentions.members.first();
            let roleToRemove ="449129600543621122";
            userToModify.removeRole(roleToRemove);
            } 
        }  

if(message.content.toLowerCase().includes( ['bepsi'] ) || message.content.toLowerCase().includes( ['pepsi'] ) ){
       message.react(":bepsi:403237730919645224");
   }
 
if(message.content.toLowerCase().startsWith( [prefix + 'say'] )){
       if (message.member.roles.find("name", "Officer")) { 
         var newm=message.content.replace("n!say", "")
         message.channel.send(newm);
       }
   } 
 
 
 
 
 
if (message.content.toLowerCase().startsWith("m!stab")) {
 message.channel.send( "")
 .then(msg => { 
                
                setTimeout(function () {
                     if (message.cleanContent.includes("@")) {
         if (message.member.roles.find("name", "Officer")) { 
         message.channel.send( "Really, boss!? again?");
       } else message.channel.send( "Oh no..");

    } else if (message.cleanContent.includes("n!stab ")) { 
    } else message.channel.send( "I'll go get the first aid kit..")
                  }, 1000);
                 } )
 
 
 
}
 
 
 
 
 

if(message.content.toLowerCase().includes( ['pee'] ) || message.content.toLowerCase().includes( ['piss'] ) || message.content.toLowerCase().includes( ['pipi'] ) ){
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
        } else if (message.content.toLowerCase().endsWith( ['?'] )) {

            if (message.content.toLowerCase().includes( ['pee'] ) || message.content.toLowerCase().includes( ['piss'] ) || message.content.toLowerCase().includes( ['pipi'] ) ) {
            
                message.channel.send(badquestions[Math.floor(Math.random()*badquestions.length)]);
            } else {
            message.channel.send(doyou[Math.floor(Math.random()*doyou.length)]);}
        } else if (message.content.toLowerCase().startsWith( ['play'] )) {
            var saying= message.cleanContent.replace("play", " ")
    search(saying, opts, function(err, results) {
        if(err) return console.log(err);
      message.channel.sendMessage(results[0].link);
      message.react("👌");
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
        }  else if(message.content.toLowerCase().includes( ['free'] )){
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

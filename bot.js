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
  bot.user.setPresence({ game: { name: 'Majima Anthem 🚧', type: 0 } })
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
 
 if(message.content.toLowerCase().includes( ['kiryu'] ) || message.content.toLowerCase().includes( ['kazzy'] )  ){

    if (message.content.toLowerCase().includes( ['call kiryu'] )) { } else {
       message.react(":majimaCANTSEEME:472575052093587457"); }
   }
 
  if(message.content.toLowerCase().includes( ['goromi'] ) ){
       message.react(":goromi:454923613594714123");
       message.react("a:love:484448929996472330");
   
   }
 
  if(message.content.toLowerCase().includes( ['tonight'] ) ){
       message.react(":nishikiCRY:460895211481071616");
       message.react(":kiryuCRY:487059468631146501");
   }
 
 if(message.content.toLowerCase().includes( ['shimano'] ) ){
       message.react("🥚");
       message.react("🔫");
   }
 
 
if(message.content.toLowerCase().startsWith( [prefix + 'say'] )){
       if (message.member.roles.find("name", "Officer")) { 
         var newm=message.content.replace("n!say", "")
         message.channel.send(newm);
       }
   } 
 

	
	
if (message.content.toLowerCase().startsWith("n!announce ")) {
        if (message.member.roles.find("name", "Officer")) { 
        var newme=message.content.replace("n!announce ", "")
        const args = newme.split(' ');
        const mensajeto = args.slice(1).join(' ');
        message.guild.channels.get(args[0]).send( "@everyone")
		
        .then(msg => { 
        
            setTimeout(function () {
                message.guild.channels.get(args[0]).send(mensajeto);
        
              }, 1000);
             } )
            
        }
    }	
	
	
 
 
 
if (message.content.toLowerCase().startsWith("m!stab")) {
   message.guild.channels.get('461288149247852559').send("There's been an stab!")
 .then(msg => { 
                
                setTimeout(function () {
                     if (message.cleanContent.includes("@")) {
         if (message.member.roles.find("name", "Officer")) { 
         message.channel.send( "Really, boss!? Again?");
       } else message.channel.send( "Oh no...");

    } else if (message.cleanContent.includes("n!stab ")) { 
    } else message.channel.send( "I'll go get the first aid kit...")
                  }, 1000);
                 } )
 
 
 
}
 
 

if(message.content.toLowerCase().startsWith("hey nishida call kiryu")){
       
    message.channel.sendMessage("Right away, "+ person + "!")
    message.channel.sendMessage(":telephone_receiver: **Calling Kiryu-san** <a:typing:485968614516850688> ")
   
    .then(msg => { 
        
        setTimeout(function () {
            msg.edit("<:callaccepted:485966797300826145> **Call Accepted!**")
            message.channel.send({embed: {


                author: {
                    name: "Kiryu",
                    icon_url: "https://cdn.discordapp.com/attachments/473329961579708437/493572212503347211/phone-flat.png"
                  },
                    color: 0x36393E,
                    thumbnail: {
                        url: "https://cdn.discordapp.com/attachments/473329961579708437/493565204462829570/kiryuicon.png",
                     },
                    description: "╭━━━━━━━━━━━━━━━╮\n<:transparent:462456796498624512>Moshi moshi?\n╰━━━━━━━━━━━━━━━╯"
                     
                  }}
            );
          }, 2000);

          const collector2 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 30000 });
          console.log(collector2)
          collector2.on('collect', message => {
              if (message.content.toLowerCase().includes( ['kill me'] )) {
                  message.channel.send({embed: {


                    author: {
                        name: "Kiryu",
                        icon_url: "https://cdn.discordapp.com/attachments/473329961579708437/493572212503347211/phone-flat.png"
                      },
                        color: 0x36393E,
                        thumbnail: {
                            url: "https://cdn.discordapp.com/attachments/473329961579708437/493565204462829570/kiryuicon.png",
                         },
                        description: "╭━━━━━━━━━━━━━━━╮\n<:transparent:462456796498624512>No!\n╰━━━━━━━━━━━━━━━╯"
                         
                      }});
              }
              else if (message.content.toLowerCase().includes( ['love'] )) {
                message.channel.send({embed: {


                    author: {
                        name: "Kiryu",
                        icon_url: "https://cdn.discordapp.com/attachments/473329961579708437/493572212503347211/phone-flat.png"
                      },
                        color: 0x36393E,
                        thumbnail: {
                            url: "https://cdn.discordapp.com/attachments/473329961579708437/493565204462829570/kiryuicon.png",
                         },
                        description: "╭━━━━━━━━━━━━━━━╮\n<:transparent:462456796498624512>O-oh...\n╰━━━━━━━━━━━━━━━╯"
                         
                      }});
              }
              else if (message.content.toLowerCase().includes( ['selfie'] )) {
               
               
               var { selfieos } = require('./selfies');
				var numberofselfies = selfieos.length - 1;
var countinselfies = Math.round(Math.random() * (numberofselfies - 1) + 1)


const RANDOMSELFIE = new Discord.RichEmbed()
  .setColor(0x36393E)
  .setAuthor("Kiryu sent a picture","https://cdn.discordapp.com/attachments/473329961579708437/493547138622423068/cameraicon.png")
  .setImage(selfieos[countinselfies]);
  

				
                message.channel.send("Oh! I got a picture from Kiryu-san! ");
                message.channel.sendEmbed(RANDOMSELFIE);
              }
            
                     
            } )
                               
         } 
        
              
        
        
        )
        
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

    if (message.content.toLowerCase().includes( ['call kiryu'] )) { } else {


    message.channel.send("Yes, " + person +"?");    
    
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 30000 });
    console.log(collector)
    collector.on('collect', message => {
        if (message.content.toLowerCase().includes( ['kill me'] )) {
            message.channel.send("I shouldn't do that.");
        }  else if (message.content.toLowerCase().endsWith( ['?'] )) {

            if (message.content.toLowerCase().includes( ['pee'] ) || message.content.toLowerCase().includes( ['piss'] ) || message.content.toLowerCase().includes( ['pipi'] ) ) {
                message.author.send("Enough piss talk.", {files: ["https://cdn.discordapp.com/attachments/449121009669505024/487053656475303947/sai2_2018-09-05_19-16-06.png"]});
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


} }

  
 
  
  
  

});






bot.login(process.env.BOT_TOKEN);

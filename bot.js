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

 
  
  
  
var randomgun =  [":boom::gun:",
":boom::gun:",
"<a:loading:436659448446976010>:gun:",
"<a:rainbOOM:439130744296701952><:gunbutrainbow:439274373590024202>",
"<:BANGO:439181687759306752><:gunbutjokers:439271523631759361>"]  

var randomgunmessage =  ["Looks like you have been **shot**. ʜᴀHA *!*",
"Looks like you have been **shot**. ʜᴀHA *!*",
"The gun is... loading? What.",
"**ʏᴏᴜ ʜᴀᴠᴇ ʙᴇᴇɴ ᴋɪʟʟᴇᴅ ʙʏ ᴛʜᴇ ᴘᴏᴡᴇʀ ᴏғ ɢ ᴀ ʏ** ʜᴀHA**H*A*** *!*",
"**ʜᴀHAAAʜᴏᴏHEEAʜᴀH*A*ʜ**"] 

var numberofgun = randomgun.length - 1;
var countgun = Math.round(Math.random() * (numberofgun - 1) + 1)
 
   if(message.content.toLowerCase().startsWith(prefix + "gun") || message.content.toLowerCase().startsWith(prefix + "shoot") ){
       
    message.channel.sendMessage(":gun:")
   
    .then(msg => { 
        
        setTimeout(function () {
            msg.edit(randomgun[countgun])
            message.channel.sendMessage(randomgunmessage[countgun])
          }, 1000);
         } )
}
  
  
  
  
  

if (message.content.startsWith(prefix + "help"))  {
message.channel.sendMessage("**Nishida** Bot   |   Prefix: `n!`\nTrying his best. Also responds to "Nishida".\nCurrent commands: `majima` , `stab` , `gun` , `clap` , `house` |  Command example: `j!majima`");
}


if (message.content.toLowerCase().startsWith(prefix + "stab")) {
  if (message.cleanContent.includes("@")) {
        var odene= message.mentions.members.first()
        message.channel.sendMessage( ":knife:  |  **" + message.author.username + "** has stabbed **" + odene + "**!");  

    } else if (message.cleanContent.includes("j!stab ")) { 
        var odene= message.cleanContent.replace("j!stab ", "")
        message.channel.sendMessage( ":knife:  |  **" + message.author.username + "** has stabbed **" + odene + "**!");  

    } else message.channel.sendMessage( ":knife:  |  **" + message.author.username + "** has been stabbed by the boss!");
}


if (message.content.startsWith(prefix + "house"))  {
    var saying= message.cleanContent.replace("j!house", " ")
message.channel.sendMessage("┏┓\n┃┃╱╲ In this \n┃╱╱╲╲ house \n╱╱╭╮╲╲ we love \n▔▏┗┛▕▔ & appreciate \n╱▔▔▔▔▔▔▔▔▔▔╲ \n"+saying+"\n╱╱┏┳┓╭╮┏┳┓ ╲╲ \n▔▏┗┻┛┃┃┗┻┛▕▔ ");
}

  

 if (message.content.startsWith(prefix + "clap"))  {
   var menos=message.cleanContent.replace("j!clap", "")
    var clappy= menos.toUpperCase().replace(/ /g," :clap: ")
message.channel.sendMessage(clappy + " :clap: ");
}

});







bot.login(process.env.BOT_TOKEN);

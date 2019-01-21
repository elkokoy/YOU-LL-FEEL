const Discord = require('discord.js')
const client = new Discord.Client();
client.on('ready', function(){
 console.log(`Logged in as ${client.user.tag}!`);
   
   // var s = ['483063515981283354','483063446376677386','483063378726879232','483063354332545045','483063463179190293']; // صور اضافيه
   var s = ['483055660209012736','480169573530861578','483055655800930315'];  // صور  الي بتشغل
    setInterval(function (){
    client.user.setPresence({
 game: { 
    type: 1,
     url: 'https://www.twitch.tv/GEKYUُME',
    name: 'GEKYUُME IS ONE',  // الكلام الي في التوتش
    application_id: '534169995161239602', // ايدي البوت او ايدي الحساب حقك 
     assets: {
         large_image:   `${s[Math.floor(Math.random() * s.length)]}`,
 
    }
  }
    });
    }, 5000);//سرعه تغير الصور  // n3k4a is one
});
client.login(process.env.BOT_TOKEN);

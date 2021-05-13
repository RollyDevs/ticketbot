//https://github.com/RollyDevs

//.env dosyasına tokeninizi yazın

var ticketkanalid = "ticketkanalidyazın";
var yetkiliid = "yetkiliidyazın";


const Discord = require('discord.js');
const client = new Discord.Client();
const talkedRecently = new Set()
const db = require('quick.db')
const fs = require('fs')


client.on('ready', () => {
    console.log(`Aktif!`)
})

client.on('message', async message => {
    if(message){
        if(message.channel.id !== ticketkanalid) return
        let sayı = db.fetch(`sayı.${message.guild.id}`) || 0
        message.guild.channels.create(`talep-${sayı + 1}`).then(async s => {
            db.add(`sayı.${message.guild.id}`, 1)
            let everyone = message.guild.roles.cache.find(r => r.name === `@everyone`)
            s.createOverwrite(everyone, {'VIEW_CHANNEL': false})
            s.createOverwrite(message.author, { 'VIEW_CHANNEL':true, 'SEND_MESSAGES':true });
            s.createOverwrite(yetkiliid, { 'VIEW_CHANNEL':true, 'SEND_MESSAGES':true });
            client.channels.cache.get(s.id).send(
                new Discord.MessageEmbed()
                .setDescription(`**Destek Sebebi: ${message.content}** \n **Destek Talebini Kapatmak İçin talep kapat Yazınız**`,`
                
                

                `)
            )
            })

    }
})

client.on('message', async message => {
    if(message.channel.id !== ticketkanalid) return 
    message.delete()
})

client.on('message', async message => {
    if(message.content.toLocaleLowerCase() == "talep kapat"){
        if(!message.channel.name.startsWith("talep")) return message.channel.send(
            new Discord.MessageEmbed()
            .setDescription(`**Bu Komut Sadece Destek Taleplerinde Kullanılabilir**`)
        )
        
       message.channel.delete()
        
        
        
            
              
    }
})

client.on('message', async message => {
    if(message.content.toLocaleLowerCase() == "kanal kapat"){ 

    }
})



client.login(process.env.token);

//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
//Coded By RollyDevs
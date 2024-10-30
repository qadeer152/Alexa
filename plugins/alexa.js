const {cmd , commands} = require('../command')

cmd({
    pattern: "alexa",
    desc: "about",
    react: "❕",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let desc = `
╒✦•··············•••••••••··············•··•✦
*QADEER MD 👧 bot is a user bot for WhatsApp that allows you to perform many tasks.  This is not an open source project.  This is just a project that allows you to deploy a bot*

 *This can do many more things, for example you can download a YouTube song* 
  .song The name of the song
  
 *Can be downloaded as above*

 *This is absolutely free*

 *Use the 📖 .menu to get the list of Qadeer commands*
 ╒✦•··············•••••••••··············•··•✦

 *QADEER bot is created by Hacker Qadeer 😎😎✅*

 *JOIN OUR GROUP TO KNOW NEW Qadeer UPDATES*

https://chat.whatsapp.com/BTtpKyI3ziK8ie2AS5KvET

*If you have any problem contact an Qadeer developer 🧑🏻‍💻 .owner Use this Comand*

Thankyou....!

> Qadeer-MD
`
return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/0s0tVTZ/20241019-114530.jpg`},caption: desc},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})

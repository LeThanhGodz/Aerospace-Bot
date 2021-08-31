const util = require("util")
exports.run = async (client,message,args)=>{
  

  
    if(client.config.owners.includes(message.author.id)) {//make sure u replace your id here
      message.react(process.env.EMOTE_OK.replace(/<(a):([^+]*)([A-Za-z0-9]*)([^+]*)([A-Za-z0-9]*):/g, "").replace(/>/g, "")||"✅").then(()=>process.exit(1))
    }
}
exports.info = {
  name: 'restart',
  aliases: [],
  description: "turn off the bot (Owner or trusted person only)",
  usage : "",
  example: "",
}
exports.conf={
  cooldown: 0,
  dm: "yes"
}
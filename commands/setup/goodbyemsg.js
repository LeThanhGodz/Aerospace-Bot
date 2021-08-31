const { MessageEmbed } = require("discord.js");
const sendError =require("../../util/success")
exports.run = (bot, message, args) => {
    let perm=message.channel.permissionsFor(message.member)//perm.has()
      if (!perm.has("MANAGE_GUILD")&&!bot.config.owners.includes(message.author.id)&&!perm.has("MANAGE_CHANNELS")&&!perm.has("ADMINISTRATOR"))
      return message.mentionReply(
        `${process.env.EMOTE_NO || '❌'}`+" | You can't use that command! you need at least manage channels, manage server or admin perm!"
      );
   const type = args[0];
    if (type === "on" || type === "enable") {
      bot.db.set(`${message.guild.id}_goodbyemessagesys`, "yes")
      message.noMentionReply(
        `${process.env.EMOTE_OK || '✅'} | Welcome message is successfully enabled!`
      );
      return;
    }
    if (type === "off" || type === "disable") {
      bot.db.set(`${message.guild.id}_goodbyemessagesys`, "no")
      message.noMentionReply(
        `${process.env.EMOTE_OK || '✅'} | Welcome message is successfully disabled!`
      );
      return;
    
}
}
exports.info = {
name: 'setgoodbyemessagesystem',
  aliases:["goodbyemsgsys", 'goodbyemessagesys',"setgoodbymessagesys", "setgoodbyemsgsys", "leavemessagesys", "setleavemessagesys", "setleavemsgsys","leavemsgsys","leavemsgsystem","setleavemsgsystem","setleavemessagesystem","leavemessagesystem"],
  usage: "<on/enable/off/disable>",
  description: "turns the welcome message on/off",
}
exports.conf={
  cooldown: 0,
  dm: "no"
}
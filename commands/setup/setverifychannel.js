const { MessageEmbed } = require("discord.js");
const sendError =require("../../util/success")
exports.run = (bot, message, args) => {
    let perm=message.channel.permissionsFor(message.member)//perm.has()
      if (!perm.has("MANAGE_GUILD")&&!bot.config.owners.includes(message.author.id)&&!perm.has("MANAGE_CHANNELS")&&!perm.has("ADMINISTRATOR"))
      return message.mentionReply(
      `${process.env.EMOTE_NO || '❌'}`+" | You can't use that command! you need at least manage channels, manage server or admin perm!"
      );
      let setup= args[0]
      if (!args[0]||isNaN(args[0].replace("<#", "").replace(">", "")))setup = message.channel.id
      bot.db.set(`${message.guild.id}_verifychannel`, setup.replace("<#", "").replace(">", ""))
      
      message.noMentionReply(
        `${process.env.EMOTE_OK || '✅'} | Successfully setup verify channel`
      );
      return;
    }

exports.info = {
name: 'setverifychannel',
  aliases:["verifychannel"],
  description: "sets the verify channel",
  usage: "<channel_id/channel_tag>"
}
exports.conf={
  cooldown: 0,
  dm: "no"
}
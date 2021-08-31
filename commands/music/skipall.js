
module.exports = {
  conf:{
    cooldown: 0,
  dm: "no"
  },
  info: {
    name: "skipall",
    description: "To skip all the songs in the queue and play the last song",
    usage: "",
    aliases: ["skip-all"],
  },
options:[],
  interaction: async (client, message, args) => {
let sendSuccess= require("../../util/slash/success"),sendError= require("../../util/slash/error")
    const { channel } = client.guilds.cache.get(message.guild_id).members.cache.get(message.member.user.id).voice;
    if (!channel)return sendError(`${process.env.EMOTE_NO || '❌'}`+' | You need to join a voice channel to use this command!', message, client);
    if (client.guilds.cache.get(message.guild_id).me.voice.channel !== channel)return sendError(`${process.env.EMOTE_NO || '❌'}`+' | You need to join voice channel where the bot is to use this command!', message, client);
    const serverQueue = client.guilds.cache.get(message.guild_id).client.queue.get(message.guild_id);
    if (!serverQueue) {
      sendError(`${process.env.EMOTE_NO || '❌'}`+" | Nothing playing in this server", message, client);
    }
     

    try {
      serverQueue.songs.splice(0, serverQueue.songs.length-2);
      serverQueue.connection.dispatcher.end("Skiped the music");
      sendSuccess(`${process.env.EMOTE_OK || '✅'}`+" | Skipped all the songs!", message, client);
//message.react(process.env.EMOTE_OK.replace(/<(a):([^+]*)([A-Za-z0-9]*)([^+]*)([A-Za-z0-9]*):/g, "").replace(/>/g, "")||"869920204786925608");
      return;
    } catch {
      serverQueue.connection.dispatcher.end();
      await channel.leave();
    }
  },
  run: async (client, message, args) => {
let sendSuccess= require("../../util/success"),sendError= require("../../util/error")
    const { channel } = message.member.voice;
    if (!channel)return sendError(`${process.env.EMOTE_NO || '❌'}`+' | You need to join a voice channel to use this command!', message);
    if (message.guild.me.voice.channel !== channel)return sendError(`${process.env.EMOTE_NO || '❌'}`+' | You need to join voice channel where the bot is to use this command!', message);
    const serverQueue = client.queue.get(message.guild.id);
    if (!serverQueue) {
      message.mentionReply(`${process.env.EMOTE_NO || '❌'}`+" | Nothing playing in this server");
    }
     

    try {
      serverQueue.songs.splice(0, serverQueue.songs.length-2);
      serverQueue.connection.dispatcher.end("Skiped the music");
message.react(process.env.EMOTE_OK.replace(/<(a):([^+]*)([A-Za-z0-9]*)([^+]*)([A-Za-z0-9]*):/g, "").replace(/>/g, "")||"✅");
      return;
    } catch {
      serverQueue.connection.dispatcher.end();
      await channel.leave();
    }
  }
};
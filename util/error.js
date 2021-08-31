const { MessageEmbed } = require("discord.js")

/**
 * @param {String} text - Message which is need to send
 * @param {var} message - A Channel to send error
 * @param {image} img - Image
 */
module.exports = async (text, message, img) => {
    let embed = new MessageEmbed()
    .setColor("RED")
    .setDescription(text)
    if(img)embed.setImage(img)
    await message.mentionReply(embed)
}
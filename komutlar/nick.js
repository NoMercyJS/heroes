const Discord = require("discord.js");
const alkan = require("../alkan.json")
const db = require("quick.db");
exports.run = async (client, message, args) => {

  var uye = message.mentions.users.first() || client.users.cache.get(args[0])
  var nick = args[1]
  var old = args[2]
if (!message.member.roles.cache.has("796718527913787454"))
    return message.channel.send(`${message.author}, \`register\` komutunu kullanmak için yeterli yetkiye sahip değilsin.`
    );
  if (!uye) return message.channel.send(`Bir kullanıcı etiketle yada ID'sini gir.`)
  if (!nick) return message.channel.send(`Bir isim giriniz.`)
  if (!old) return message.channel.send(`Bir yaş belirt.`)
  message.guild.members.cache.get(uye.id).setNickname(`${nick} | ${old}`)
  return message.channel.send(new Discord.MessageEmbed().setAuthor(message.author.username,message.author.avatarURL({ dynamic: true }))
.setDescription(`${uye} üyesinin ismi başarıyla değiştirildi`))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["isim", "nickname", "isim-değiştir"],
  permLevel: 0,
};

exports.help = {
  name: "nick"
};

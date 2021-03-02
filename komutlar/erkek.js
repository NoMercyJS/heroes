const Discord = require("discord.js");
const alkan = require("../alkan.json")
const db = require("quick.db");
exports.run = async (client, message, args) => {
  const erkekUye = "796718566874808331" //ERKEK ÜYE ROL ID
  const erkekUye1 = "797738659025518626" //ERKEK ÜYE ROL ID2
  const kayıtsızUye = "796718623992315904" // KAYITSIZ ÜYE ROL ID
  var uye = message.mentions.users.first() || client.users.cache.get(args[0])
if (!message.member.roles.cache.has("796718527913787454"))
    return message.channel.send(`${message.author}, \`register\` komutunu kullanmak için yeterli yetkiye sahip değilsin.`
    );
  if (!uye) return message.channel.send(`Bir kullanıcı etiketle yada ID'sini gir.`)
  message.guild.members.cache.get(uye.id).roles.add(erkekUye)
  message.guild.members.cache.get(uye.id).roles.add(erkekUye1)
  message.guild.members.cache.get(uye.id).roles.remove(kayıtsızUye)
  return message.channel.send(new Discord.MessageEmbed().setAuthor(message.author.tag,message.author.avatarURL({ dynamic: true })).setDescription(`${uye} üyesine <@&${erkekUye}> rolü verildi`)).then(a => a.delete({ timeout: 9000 }))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["e", "man", "men", "body"],
  permLevel: 0,
};

exports.help = {
  name: "erkek"
};

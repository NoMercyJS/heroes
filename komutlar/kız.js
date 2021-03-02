const Discord = require("discord.js");
const alkan = require("../alkan.json")
const db = require("quick.db");
exports.run = async (client, message, args) => {
  const kızUye = "796718599414480906" 
   const kızUye1 = "797738659025518626" 
  const kayıtsızUye= "796718623992315904"
  var uye = message.mentions.users.first() || client.users.cache.get(args[0])
if (!message.member.roles.cache.has("796718527913787454"))
    return message.channel.send(`${message.author}, \`register\` komutunu kullanmak için yeterli yetkiye sahip değilsin.`
    );
  if (!uye) return message.channel.send(`Bir kullanıcı etiketle yada ID'sini gir.`)
  message.guild.members.cache.get(uye.id).roles.add(kızUye)
  message.guild.members.cache.get(uye.id).roles.add(kızUye1)
  message.guild.members.cache.get(uye.id).roles.remove(kayıtsızUye)
  return message.channel.send(new Discord.MessageEmbed().setAuthor(message.author.tag,message.author.avatarURL({ dynamic: true })).setDescription(`${uye} üyesine <@&${kızUye}> rolü verildi`)).then(a => a.delete({ timeout: 9000 }))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k", "kadın", "girl", "woman"],
  permLevel: 0,
};

exports.help = {
  name: "kız"
};

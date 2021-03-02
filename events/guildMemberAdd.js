module.exports = (client, member) => {
  
 const kanal = "798264581101191260"
 const swsayi = member.guild.memberCount;
   client.channels.cache.get(kanal).send(`${member} Heroes'e hoş geldin. Kayıt için sesli odalardan birine girip yetkili arkadaşlara ses teyit ettirmelisin. Seninle beraber ${swsayi} üye olduk.`)
};
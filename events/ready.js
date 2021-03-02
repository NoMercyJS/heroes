module.exports = client => {
  client.user.setStatus("online");
  console.log(`${client.user.tag} İimli botunuzun durumu yüklendi!`)
  client.user.setActivity(`Alkan Code v12 kayıt sistemi`, { type: "WATCHING"});  
  console.log(`Bot Akitf Komutlar Yüklendi !`);
};
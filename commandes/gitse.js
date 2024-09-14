/*"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "git", reaction: "😈", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '𝗛𝗘𝗟𝗟𝗢 👋  \n\n ' + "𝗪𝗮𝗻𝗻𝗮 𝘀𝘂𝗽𝗽𝗼𝗿𝘁 𝘁𝗵𝗲 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿..*𝗷𝘂𝘀𝘁 𝗳𝗼𝗹𝗹𝗼𝘄 𝗵𝗶𝘀 𝗮𝗰𝗰𝗼𝘂𝗻𝘁*";
    let d = 'https://github.com/carl24tech';
    let varmess = z + d;
    var img = 'https://i.imgur.com/N30m3ue.jpeg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *FLASH-MD* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *France King*'
      let varmess=z+d
      var img='https://telegra.ph/file/13d63c21c1a665bfd8324.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 

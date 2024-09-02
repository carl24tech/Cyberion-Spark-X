"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "repo", reaction: "🥴", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '𝗧𝗛𝗘 𝗔𝗡𝗢𝗡𝗬𝗠𝗢𝗨𝗦🗿𝗖𝗬𝗕𝗘𝗥𝗜𝗢𝗡 𝗕𝗬 𝗖𝗔𝗥𝗟𝗧𝗘𝗖𝗛😎  \n\n ' + "𝗙𝗢𝗥𝗞 𝗧𝗛𝗘 𝗥𝗘𝗣𝗢 𝗧𝗢 𝗗𝗘𝗣𝗟𝗢𝗬 𝗬𝗢𝗨𝗥 𝗢𝗪𝗡 𝗕𝗢𝗧 *𝗖𝗬𝗕𝗘𝗥𝗜𝗢𝗡 𝗥𝗘𝗣𝗢*";
    let d = 'https://github.com/carl24tech/Cyberion-V1';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/6e44a1d716ebdfa1dd2ca.jpg';
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

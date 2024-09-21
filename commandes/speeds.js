"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "speed", reaction: "🕳", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '𝑯𝒆𝒍𝒍𝒐 𝒗𝒂𝒍𝒖𝒆𝒅 𝒖𝒔𝒆𝒓 𝒐𝒇 𝑪𝒚𝒃𝒆𝒓𝒊𝒐𝒏';
    let d = '𝑻𝒉𝒆 𝒂𝒃𝒐𝒗𝒆 𝒎𝒆𝒔𝒔𝒂𝒈𝒆 𝒊𝒔 𝒕𝒐 𝒊𝒏𝒇𝒐𝒓𝒎 𝒚𝒐𝒖 𝒕𝒉𝒂𝒕 𝑪𝒚𝒃𝒆𝒓𝒊𝒐𝒏 𝒊𝒔 𝑪𝒖𝒓𝒓𝒆𝒏𝒕𝒍𝒚 𝒂𝒕 𝒂 𝒈𝒐𝒐𝒅 𝒔𝒑𝒆𝒆𝒅 𝒐𝒇 700.13/ms.';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/0e2976b99ebfc22a2753f.jpg';
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
   let z ='Salut je m\'appelle *Zokou* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *Djalega++*'
      let varmess=z+d
      var img='https://telegra.ph/file/626e7105422c8908f723d.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 

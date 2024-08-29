/*"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "carl", reaction: "📷", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'CARL-HD-PHOTO \n\n ' + "*HD.*";
    let d = ' #KING';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/67867a68063334c516894.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="😜"
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

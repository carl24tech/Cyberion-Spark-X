"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "channel", reaction: "🧒", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*Yoo support me by following my channel* 🙏 \n\n ' + "║❒ 𝙒𝘼𝘾𝙃𝘼𝙉𝙉𝙀𝙇 https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";
    let d = '                                                     ║❒ 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 ';
    let varmess = z + d;
    var mp4 = 'https://telegra.ph/file/cc5fd0e19ae11164bd813.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");

zokou({ nomCom: "cyborg", reaction: "🦾", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '𝒀𝒆𝒔😉 𝑨𝒎 𝑪𝒚𝒃𝒆𝒓𝒊𝒐𝒏-𝑽1 𝑨 𝑾𝒉𝒂𝒕𝒔𝒂𝒑𝒑 𝑩𝒐𝒕 𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 𝑪𝒂𝒓𝒍𝒕𝒆𝒄𝒉 \n\n ' + "𝑰𝒇 𝒚𝒐𝒖 𝒘𝒂𝒏𝒕 𝒕𝒐 𝒖𝒔𝒆 𝒎𝒆 𝒋𝒖𝒔𝒕 𝒕𝒚𝒑𝒆 𝒎𝒆𝒏𝒖 𝒕𝒐 𝒄𝒐𝒎𝒎𝒂𝒏𝒅 𝒎𝒆";
    let d = '                                                🏁𝑨𝒎 𝒕𝒉𝒆 𝒇𝒂𝒔𝒕𝒆𝒔𝒕 𝒃𝒐𝒕 𝒊𝒏 𝒕𝒉𝒆 𝒘𝒐𝒓𝒍𝒅';
    let varmess = z + d;
    var mp4 = 'https://telegra.ph/file/cc5fd0e19ae11164bd813.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
    
});
console.log("mon test");

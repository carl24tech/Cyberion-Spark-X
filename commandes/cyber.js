const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
zokou({ nomCom: "cyberion", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }
    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });
    
    moment.tz.setDefault("Africa/Nairobi");
    
// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');
  let infoMsg =  `
 Welcome: ${nomAuteurMessage}
╭━━〔 *${s.BOT}* 〕━━┈⊷
┃⊛╭───────────
┃⊛│◆ 𝗢𝘄𝗻𝗲𝗿 : ${s.OWNER_NAME}
┃⊛│◆ 𝗣𝗿𝗲𝗳𝗶𝘅 : [ ${s.PREFIXE} ] 
┃⊛│◆ 𝗠𝗼𝗱𝗲 : *${mode}*
┃⊛│◆ 𝗥𝗮𝗺  : *${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}*
┃⊛│◆ 𝗗𝗮𝘁𝗲  : *${date}* 
┃⊛│◆ 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 :  ${os.platform}
┃⊛│◆ 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ℂ𝔸ℝ𝕃𝕋𝔼ℂℍ
┃⊛└───────────☆
╰──────────────☆\n${readmore}`;
    let menuMsg = `CYBERION`;
    for (const cat in coms) {
        menuMsg += `
╭──「 *${cat}* 」──✫ 
┃╭──────────
┌┤ `;for (const cmd of coms[cat]) {
            menuMsg += `          
┃│✫  ${cmd}`    
        } 
        menuMsg +=`
┌┤
│╰────────┈⊷  
╰────────────┈⊷`
    }
    menuMsg += `
> CYBERION-V1\n
`;
   var lien = mybotpic();
   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *TREX-MD*, déveloper Bera Tech" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
       console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *TREX-MD*, déveloper Bera Tech" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    repondre(infoMsg + menuMsg);
}
});

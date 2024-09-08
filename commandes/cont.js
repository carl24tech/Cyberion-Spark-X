const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "conts", categorie: "General" }, async (dest, zk, commandeOptions) => {
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
 *HELLO DEAR THE ABOVE ARE THE CONTRIBUTORS ON THUS PROJECT*
 
 
 
*𝐊𝐢𝐧𝐝𝐥𝐲 𝐤𝐧𝐨𝐰 𝐭𝐡𝐢𝐬*
 
 ☆. Ibrahim Adams:
 > The Right hand man that took part in the development of Cyberion V1 and gave the every needed assistance.
 ★. CARLTECH:
 > He was the individual who came up with a great idea of generating Cyberion V1.
 ☆ Devibraah:
 > He is the official provider of the base where Cyberion V1 runs.
 ╭───────────────────❒
 │ CYBERION❒⁠⁠⁠⁠
 │ CARLTECH❒⁠⁠
 ⁠⁠⁠⁠╰───────────────────❒
 
 
 `;
    
let menuMsg = `
> Made by : 𝗖𝗔𝗥𝗟𝗧𝗘𝗖𝗛
`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Bugatti*, déveloper Marisel" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Bugatti*, déveloper Marisel" }, { quoted: ms });
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

                    

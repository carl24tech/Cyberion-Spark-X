/*const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

zokou({ nomCom: "sparkx", categorie: "General" }, async (dest, zk, commandeOptions) => {
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

// Créer une date et une heure en EAT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
╭────《𝑺𝑷𝑨𝑹𝑲-𝑿》──────❒
╏✰▏ *User* : ${s.OWNER_NAME}
╏✰▏ *Developer* : *CARLTECH*
╰───────────────────❒
╏✰▏ *Mode* : ${mode}
╏✰▏ *Commands* : ${cm.length} 
╰───────────────────❒
╏✰▏ *Time* : ${temps} 
╏✰▏ *Ram* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
╏✰▏ *Version* : *✨SPARK X*
╰───────────────────❒ \n\n`;
 
    let menuMsg=`  
   ▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀
   ◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤
`;

    for (const cat in coms) {
        menuMsg += `*╭────☆* *${cat}* *☆*`;
        for (const cmd of coms[cat]) {
            menuMsg += `  
*╏* ${cmd}`;
        }
        menuMsg += `
*╰─═════════════■* \n`
    }

    menuMsg += `
            
*■■■□□□□*

  *CYBERION-SPARK-X*                                         
*╰─═════════════■*
`;
 
 conn.sendButton(m.chat, text.replace(), author, pp, [['Script 🌹', '.script'], ['Bot Speed 🚀', '.ping']], null, [['Follow Owner 🫣', smlink], ['Join Group 🥰', gclink]], m);
     
     

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Zokou-MD*, développé par Djalega++" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "*Ibrahim-tech*" }, { quoted: ms });
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

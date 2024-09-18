const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "cpu", categorie: "General" }, async (dest, zk, commandeOptions) => {
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
 
~Cyberion-Spark-X~
rss         : 165.25 MB
heapTotal   : 62.66 MB
heapUsed    : 49.72 MB
external    : 33.21 MB
arrayBuffers: 29.87 MB

_Total CPU Usage of Spark X_
Thinkpad 5 3600 i7 Core Processor (14th Generation)
- *user* : 65.92%
- *nice* : 0.00%
- *sys*  : 20.61%
- *idle* : 13.47%
- *irq*  : 0.00%
_CPU Core(s) Usage (12 intel Core)_
1. Thinkpad 5 3600 i7 Core Processor (14th Gen)
- *AI* : 66.87%
- *Blaz* : 0.00%
- *Mods*  : 20.18%
- *cache* : 12.94%
- *temp*  : 0.00%

2. Thinkpad 5 3600 i7 Core Processor (14th Gen)
- *AI* : 67.82%
- *Blaz* : 0.00%
- *Mods*  : 12.61%
- *cache* : 19.57%
- *temp*  : 0.00%

3. Thinkpad 5 3600 i7 Core Processor (14th Gen)
- *AI* : 66.77%
- *Blaz* : 0.00%
- *Mods*  : 20.29%
- *cache* : 12.95%
- *temp*  : 0.00%

4. Thinkpad 5 3600 i7 Core Processor (14th Gen)
- *AI* : 65.12%1
- *Mods*  : 21.69%
- *cache* : 13.19%
- *temp*  : 0.00%

5. Thinkpad 5 3600 i7 Core Processor (14th Gen)
- *AI* : 64.55%
- *Blaz* : 0.00%
- *Mods*  : 22.22%
- *cache* : 13.19%
- *temp* : 0.00%

6. Thinkpad 5 3600 i7 Core Processor (14th Gen)
- *AI* : 64.58%
- *Blaz* : 0.00%
- *Mods*  : 22.23%
- *cache* : 13.18%
- *temp*  : 0.00%

7. Thinkpad 5 3600 i7 Core Processor (14th Gen)
- *AI* : 66.02%
- *Blaz* : 0.00%
- *Mods*  : 20.93%
- *cache* : 13.05%
- *temp*  : 0.00%

8. Thinkpad 5 3600 i7 Core Processor (14th Gen)
- *AI* : 71.50%
- *Blaz* : 0.00%
- *Mods*  : 15.27%
- *cache* : 13.23%
- *temp*  : 0.00%

9. Thinkpad 5 3600 i7 Core Processor (14th Gen)
- *AI* : 65.79%
- *Blaz* : 0.00%
- *Mods*  : 21.12%
- *cache* : 13.09%
- *temp*  : 0.00%

10. Thinkpad 5 3600 i7 Core Processor (14th Gen)
- *AI* : 64.58%
- *Blaz* : 0.00%
- *Mods*  : 22.01%
- *cache* : 13.40%
- *temp*  : 0.00%

11. Thinkpad 5 3600 i7 Core Processor (14th Gen)
- *AI* : 64.22%
- *Blaz* : 0.00%
- *Mods*  : 22.44%
- *cache* : 13.34%
- *temp*  : 0.00%

12. Thinkpad 5 3600 i7 Core Processor (14th Gen)
- *AI* : 64.18%
- *Blaz* : 0.00%
- *Mods*  : 22.45%
- *cacche* : 13.38%
- *temp*  : 0.00%
Product By CarlTech 2024
 `;
    
let menuMsg = `
> Servers supported by Thinkpad 
> Beneficials to CARLTECH 2024
`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Spark X*, déveloper Carltech" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Spark X*, déveloper Carltech" }, { quoted: ms });
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

                    

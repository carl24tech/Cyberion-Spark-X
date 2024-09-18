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
 
_Node.js Memory Usaage_
rss         : 165.25 MB
heapTotal   : 62.66 MB
heapUsed    : 49.72 MB
external    : 33.21 MB
arrayBuffers: 29.87 MB

_Total CPU Usage of Spark X_
Thinkpad 5 3600 6-Core Processor (3961.333333333333 MHZ)
- *user* : 65.92%
- *nice* : 0.00%
- *sys*  : 20.61%
- *idle* : 13.47%
- *irq*  : 0.00%
_CPU Core(s) Usage (12 Core CPU)_
1. Thinkpad 5 3600 6-Core Processor (3949 MHZ)
- *user* : 66.87%
- *nice* : 0.00%
- *sys*  : 20.18%
- *idle* : 12.94%
- *irq*  : 0.00%

2. Thinkpad 5 3600 6-Core Processor (3949 MHZ)
- *user* : 67.82%
- *nice* : 0.00%
- *sys*  : 12.61%
- *idle* : 19.57%
- *irq*  : 0.00%

3. Thinkpad 5 3600 6-Core Processor (3949 MHZ)
- *user* : 66.77%
- *nice* : 0.00%
- *sys*  : 20.29%
- *idle* : 12.95%
- *irq*  : 0.00%

4. Thinkpad 5 3600 6-Core Processor (3949 MHZ)
- *user* : 65.12%
- *nice* : 0.00%
- *sys*  : 21.69%
- *idle* : 13.19%
- *irq*  : 0.00%

5. Thinkpad 5 3600 6-Core Processor (3949 MHZ)
- *user* : 64.55%
- *nice* : 0.00%
- *sys*  : 22.22%
- *idle* : 13.23%
- *irq*  : 0.00%

6. Thinkpad 5 3600 6-Core Processor (3949 MHZ)
- *user* : 64.58%
- *nice* : 0.00%
- *sys*  : 22.23%
- *idle* : 13.18%
- *irq*  : 0.00%

7. Thinkpad 5 3600 6-Core Processor (3974 MHZ)
- *user* : 66.02%
- *nice* : 0.00%
- *sys*  : 20.93%
- *idle* : 13.05%
- *irq*  : 0.00%

8. Thinkpad 5 3600 6-Core Processor (3974 MHZ)
- *user* : 71.50%
- *nice* : 0.00%
- *sys*  : 15.27%
- *idle* : 13.23%
- *irq*  : 0.00%

9. Thinkpad 5 3600 6-Core Processor (3974 MHZ)
- *user* : 65.79%
- *nice* : 0.00%
- *sys*  : 21.12%
- *idle* : 13.09%
- *irq*  : 0.00%

10. Thinkpad 5 3600 6-Core Processor (3974 MHZ)
- *user* : 64.58%
- *nice* : 0.00%
- *sys*  : 22.01%
- *idle* : 13.40%
- *irq*  : 0.00%

11. Thinkpad 5 3600 6-Core Processor (3973 MHZ)
- *user* : 64.22%
- *nice* : 0.00%
- *sys*  : 22.44%
- *idle* : 13.34%
- *irq*  : 0.00%

12. Thinkpad 5 3600 6-Core Processor (3973 MHZ)
- *user* : 64.18%
- *nice* : 0.00%
- *sys*  : 22.45%
- *idle* : 13.38%
- *irq*  : 0.00%
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

                    

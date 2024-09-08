


const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUFGUTFkWDlpbnBUNmpCdDQwUk5lNXl1UnVkZWd2dnZEQXZQUkg3UEsxcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFBmMEdpL003OEsrZ2dnKzZ2VXBON2d4OVNVR0ppSEliUytRU3hrK1B6cz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrS0dhK3NudW5Mek14a1U4b0FuTDRtOXFOZmU2TW4vb1puYlNmNjRGSjNJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQQ0RjckJRMjR6emtOMDVpVVEwcEFKdzAvMHFObnAvNGtXcUphN2R1NkhzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFEb2VIVnFoS0JxNDRhdG9rVVV2VmhONHJiRVlLbTdpRjlEa2hjUDNMbXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InUvMGl4UmNmbmd3S3l3b2hLaTk4ZXBFcG5jMVhrQTdNS2RsOHdLT1FRUWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0dodHZ4Wjh1eHFGQmFCM0R0QWpKUFRjTTZQODhLc0EvWnJENDVXWUJsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidTBISjRUYm8yNkhnR1RtR1Q0aGZpWHJHUFRFeDhoTFN3eC9ab3M5RXRRbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Img0eTZNZUdWWVRLTjk5M2dsczM0Tjk3cXVvWi9SOVNZb2QvaDJVdDEzV0RzRWxpSlIvY3VLd3VYdDYrMkNDWG0vSFBJelRNdzVIQmVSMS9NMWFzT2pBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYwLCJhZHZTZWNyZXRLZXkiOiJFcThPTWJoblBUeEFkZWd5dWtlVDYrVTM4eTJIUlloVTlUNTZRL2Iycm40PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1Njc4MDMyNDM2OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzNENFOTZERUJFQzYwMDU5MkUxNjU4NDEzMUY0RUI3MiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1Nzk4OTg0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTY3ODAzMjQzNjlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiODIzOEYwOTlGQUJEOEZDMTYyQkRDNkVBN0VFODdCRjkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTc5ODk4Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiU1dpZ0RBaXhRazJ2cWpQVGZ2a3lDQSIsInBob25lSWQiOiI3MTY4NGEwZS0yZjI5LTQzNmEtOTA2YS0zZDZhYjk4NzVjOTciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicGJOQVlxYy9hS2VlZmxZbEpDRk5reFRsdFYwPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVFL1RCeWdPcVVWTVppaFdRR2NCa2VHN2Q1QT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJKVzVaRUZaRSIsIm1lIjp7ImlkIjoiMjU2NzgwMzI0MzY5OjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQXBwbGUgdW5kZXJjb3ZlciJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFR0Z3M4REVMbTA5cllHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTUFtN05IRVVxM1FDMUZmelNha1ovR3RGS2ZiSmZ4NXgwaGhISFZEcWlUbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSHRPTGp2aWFCYjFaalJEcEM4SW1BNmFxWU9rRFFEWTZsNmJCMlFjZmMwSHJCSG9BbmtVVmtpa0YrcWVWb1o1b1IvNDZsZnZ3NU5iUktGVEFpcGR1Qnc9PSIsImRldmljZVNpZ25hdHVyZSI6IlQ1ZEFyMW1oV1dYdXJ5NW9JQ1JGdTNZcmZ5YjA2dXMrMG8xL0paNVNmR1A4ODBMMm0zaVpNU3d4RlRMRUhpMVpPNXRsb2xWcGNJdi9ubzQvajdmVmlnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU2NzgwMzI0MzY5OjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVEFKdXpSeEZLdDBBdFJYODBtcEdmeHJSU24yeVg4ZWNkSVlSeDFRNm9rNiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTc5ODk4MiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFTjYifQ==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Carl William",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Carl William",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "no",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'Cyberion_V1',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/17c83719a1b40e02971e4.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});


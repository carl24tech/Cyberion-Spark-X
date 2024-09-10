"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "carltech", catégorie:"Général", reaction: "🔎", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://github.com/carl24tech/Cyberion-V1';
  const img = 'https://telegra.ph/file/0e2976b99ebfc22a2753f.jpg';

  try {
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: data.updated_at,
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
      const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

      const gitdata = `*𝐇𝐞𝐥𝐥𝐨 𝐦𝐲 𝐄𝐬𝐭𝐞𝐞𝐦𝐞𝐝 𝐮𝐬𝐞𝐫.𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨 𝐂𝐲𝐛𝐞𝐫𝐢𝐨𝐧 𝐕1 𝐢𝐧𝐟𝐨*\n  
      *𝐓𝐡𝐞 𝐚𝐛𝐨𝐯𝐞 𝐢𝐧𝐟𝐨 𝐢𝐬 𝐟𝐨𝐫 𝐲𝐨𝐮 𝐭𝐨 𝐤𝐧𝐨𝐰.*
╭──▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱
│⛲️│ *𝐒𝐞𝐬𝐬𝐢𝐨𝐧* https://github.com/carl24tech/SESSION-SITE
│♨️│ *𝐑𝐞𝐩𝐨:* ${data.html_url}
│🌟│ *𝐒𝐭𝐚𝐫𝐬:* ${repoInfo.stars}
│🍽│ *𝐅𝐨𝐫𝐤𝐬:* ${repoInfo.forks}
│⚯️│ *𝐑𝐞𝐥𝐞𝐚𝐬𝐞 𝐃𝐚𝐭𝐞:* ${releaseDate}
│🕳│ *𝐔𝐩𝐝𝐚𝐭𝐞𝐝: ${repoInfo.lastUpdate}
│🕵️│ *𝐎𝐰𝐧𝐞𝐫:* 𝐂𝐀𝐑𝐋𝐓𝐄𝐂𝐇
│🪀│ *𝐂𝐡𝐚𝐧𝐧𝐞𝐥:* https://whatsapp.com/channel/0029Vak0genJ93wQXq3q6X3h
│📩│ *𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦:* https://t.me.carlltecch 
╰──▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱
          *CYBERION-V1*`;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});

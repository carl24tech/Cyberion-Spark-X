







































"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "repo", catégorie:"General", reaction: "🕳", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://api.github.com/repos/carl24tech/Cyberion-Spark-X';
  const img = 'https://i.imgur.com/THxMxIy.jpeg';

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

      const gitdata = `*𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨 𝐂𝐲𝐛𝐞𝐫𝐢𝐨𝐧-𝐒𝐩𝐚𝐫𝐤-𝐗 𝐫𝐞𝐩𝐨*\n  
      *𝐓𝐡𝐢𝐬 𝐢𝐬 𝐭𝐡𝐞 𝐜𝐮𝐫𝐫𝐞𝐧𝐭 𝐩𝐫𝐨𝐠𝐫𝐞𝐬𝐬.*
┏────────────────────────⊷
│ ☋️ *𝐒𝐞𝐬𝐬𝐢𝐨𝐧* : https://github.com/carl24tech/SESSION-SITE 

│ 🔁 *𝐑𝐞𝐩𝐨:* ${data.html_url}

│ 🌟 *𝐒𝐭𝐚𝐫𝐬:* ${repoInfo.stars}

│ 🍽 *𝐅𝐨𝐫𝐤𝐬:* ${repoInfo.forks}

│ 📅 *𝐑𝐞𝐥𝐞𝐚𝐬𝐞 𝐃𝐚𝐭𝐞:* ${releaseDate}

│ 💻 *𝐔𝐩𝐝𝐚𝐭𝐞𝐝: ${repoInfo.lastUpdate}

│ 🕵 *𝐎𝐰𝐧𝐞𝐫:* 𝘊𝘈𝘙𝘓𝘛𝘌𝘊𝘏

│ 🌐 *𝐂𝐡𝐚𝐧𝐧𝐞𝐥:* https://whatsapp.com/channel/0029Vak0genJ93wQXq3q6X3h

│ 📨 *𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦:* https://t.me/carlltecch
╰─────────────────────────⊷
          *𝑪𝒀𝑩𝑬𝑹𝑰𝑶𝑵-𝑺𝑷𝑨𝑹𝑲-𝑿*`;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});

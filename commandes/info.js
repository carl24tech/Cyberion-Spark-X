"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "gitdata", catégorie:"General", reaction: "📑", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://api.github.com/repos/betingrich/Tesla';
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

      const gitdata = `*𝐇𝐄𝐋𝐋𝐎 𝐀𝐌* *𝐂𝐘𝐁𝐄𝐑𝐈𝐎𝐍-𝐕1.*\n  
💬 *𝗣𝗮𝗶𝗿 𝗰𝗼𝗱* https://github.com/carl24tech/SESSION-SITE
🗯 *𝗥𝗲𝗽𝗼:* ${data.html_url}
💫 *𝗦𝘁𝗮𝗿𝘀:* ${repoInfo.stars}
🍽 *𝗙𝗼𝗿𝗸𝘀:* ${repoInfo.forks}
💥 *𝗥𝗲𝗹𝗲𝗮𝘀𝗲 𝗗𝗮𝘁𝗲:* ${releaseDate}
🗨 *𝗨𝗽𝗱𝗮𝘁𝗲𝗱 𝗼𝗻:* ${repoInfo.lastUpdate}
🕵 *𝗢𝘄𝗻𝗲𝗿:* *CARLTECH*
__________________________________
            *𝐂𝐘𝐁𝐄𝐑𝐈𝐎𝐍*`;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});

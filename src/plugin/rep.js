import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const { generateWAMessageFromContent } = pkg;
import axios from 'axios';

const handleRepoCommand = async (m, Matrix) => {
  try {
    // Fetch Repository Info
    const repoLink = 'https://github.com/carl24tech/Buddy-XTR';
    const repoOwner = 'carl24tech';
    const repoName = 'Buddy-XTR';

   const {
      full_name,
      name,
      forks_count,
      stargazers_count,
      created_at,
      updated_at,
      owner,
    } = repoData;

    const fetchedDate = new Date().toLocaleString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    // Styled Repository Message
    const messageText = `🌍 *${repoName} REPO INFO* 🌟\n\n` +
      `💡 *Name:* ${repoName}\n` +
      `⭐ *Stars:* ${repoData.stars}\n` +
      `🍴 *Forks:* ${repoData.forks}\n` +
      `👀 *Watchers:* ${repoData.watchers}\n` +
      `❗ *Open Issues:* ${repoData.openIssues}\n` +
      `👤 *Owner:* ${repoOwner}\n\n` +
      `🕒 *Fetched on:* ${fetchedDate}\n\n` +
      `🔗 *Repo Link:* ${repoLink}\n\n` +
      `🛠️ Scripted by *${repoOwner}*\n\n` +
      `Stay connected and follow my updates!`;

    // Send the styled message
    await Matrix.sendMessage(m.from, { text: messageText }, { quoted: m });
    await m.react('✅');
  } catch (error) {
    console.error('Error processing your request:', error);
    m.reply('> https://github.com/carl24tech/Buddy-XTR');
    await m.react('🥲');
  }
};

const searchRepo = async (m, Matrix) => {
  const prefixMatch = m.body.match(/^[+×÷=/_<>[\]!@#.£%^&*()\-"'1234567890?,°€£^:;?¿‽】〕」』【〔「『<>_${}\|`《○♡○¡☆《●●■◇¡¤▪︎•°~♡●♧₩$€○》☆¡Abcdefghijklmonpqrstuvwxyz]/i);
  const prefix = prefixMatch ? prefixMatch[0] : '/';
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';

  const validCommands = ['repo', 'sc', 'script'];

  if (validCommands.includes(cmd)) {
    await handleRepoCommand(m, Matrix);
  }
};

export default searchRepo;

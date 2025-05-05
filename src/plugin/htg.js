import config from '../../config.cjs';

const tagall = async (m, gss) => {
  try {
    const botNumber = await gss.decodeJid(gss.user.id);
    const prefix = config.PREFIX;
    const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';

    const validCommands = ['hidetag'];
    if (!validCommands.includes(cmd)) return;

    // Check if command is used in a group
    if (!m.isGroup) {
      return m.reply("*📛 THIS COMMAND CAN ONLY BE USED IN GROUPS*");
    }

    const groupMetadata = await gss.groupMetadata(m.from);
    const participants = groupMetadata.participants;

    const botAdmin = participants.find(p => p.id === botNumber)?.admin;
    const senderAdmin = participants.find(p => p.id === m.sender)?.admin;

    // Check if bot and sender are admins
    if (!botAdmin) return m.reply("*📛 BOT MUST BE AN ADMIN TO USE THIS COMMAND*");
    if (!senderAdmin) return m.reply("*📛 YOU MUST BE AN ADMIN TO USE THIS COMMAND*");

    // Message to be sent
    const text = m.body.slice(prefix.length + cmd.length).trim() || 'no message';

    // Send the message without showing mentions in text, but notifying all participants
    await gss.sendMessage(
      m.from,
      { text: text, mentions: participants.map(p => p.id) },
      { quoted: m }
    );

  } catch (error) {
    console.error('Error:', error);
    await m.reply('An error occurred while processing the command.');
  }
};

export default tagall;

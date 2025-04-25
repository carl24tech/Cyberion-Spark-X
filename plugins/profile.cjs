module.exports = {
    defaultProfilePicture: "https://files.catbox.moe/lausg6.jpg",
    prefix: "." // Change this to your desired prefix
};
const config = require("./config.cjs");

module.exports = async (context) => {
    const { client, m } = context;

    // Check if the message starts with the prefix
    if (!m.text.startsWith(config.prefix)) return;

    const command = m.text.slice(config.prefix.length).trim().split(" ")[0];

    if (command === "profile1") {
        const target = m.quoted ? m.quoted.sender : m.sender;
        const name = m.quoted ? "@" + target.split("@")[0] : m.pushName;

        let ppUrl;
        try {
            ppUrl = await client.profilePictureUrl(target, "image");
        } catch {
            ppUrl = config.defaultProfilePicture;
        }

        let status;
        try {
            status = await client.fetchStatus(target);
        } catch {
            status = { status: "About not accessible due to user privacy" };
        }

        const message = {
            image: { url: ppUrl },
            caption: `Name: ${name}\nAbout:\n${status.status}`,
            mentions: m.quoted ? [m.quoted.sender] : []
        };

        await client.sendMessage(m.chat, message, { quoted: m });
    }
};















const {
  zokou
} = require(__dirname + "/../framework/zokou");
const {
  format
} = require(__dirname + "/../framework/mesfonctions");
const os = require('os');
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
zokou({
  'nomCom': "menu",
  'categorie': "General"
}, async (_0x235dfd, _0x2ea67f, _0x34dfb6) => {
  let {
    ms: _0x4e95b0,
    repondre: _0xd05731,
    prefixe: _0x2fd1af,
    nomAuteurMessage: _0x321d17,
    mybotpic: _0xf52443
  } = _0x34dfb6;
  let {
    cm: _0x245439
  } = require(__dirname + "/../framework//zokou");
  var _0x480772 = {};
  var _0x2c0b52 = "public";
  if (s.MODE.toLocaleLowerCase() != "yes") {
    _0x2c0b52 = "private";
  }
  _0x245439.map(async (_0x22a164, _0x217e6a) => {
    if (!_0x480772[_0x22a164.categorie]) {
      _0x480772[_0x22a164.categorie] = [];
    }
    _0x480772[_0x22a164.categorie].push(_0x22a164.nomCom);
  });
  moment.tz.setDefault("Africa/Nairobi");
  const _0x184a2c = moment().format("HH:mm:ss");
  let _0x53b6fa = "\n\n 👋 *Hello* : " + _0x321d17 + "\n┏───────────────⊷\n┇ 『𝗠𝗔𝗜𝗡』\n┇ 🌐 *Mode* : 【" + _0x2c0b52 + "】\n┇ 🔑 ignition : [" + s.PREFIXE + "]\n┇ 📜 Plugins : [" + _0x245439.length + "] \n┇ ⌚️ *Time* : " + _0x184a2c + "\n┇ 🖥️ System : 𝗖𝘆𝗯𝗲𝗿𝗶𝗼𝗻-𝗦𝗽𝗮𝗿𝗸-𝗫\n┇ 🌌 Theme : GALAXY\n┇ ▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄\n└────═━┈┈━═─────⊷\n┏────────────────────⊷\n┇ 『𝗦𝗧𝗢𝗥𝗔𝗚𝗘』\n┇ 📼 *Ram* : " + format(os.totalmem() - os.freemem()) + '/' + format(os.totalmem()) + "\n└─────═━┈┈━═─────⊷\n╭━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷\n┇ 『𝗖𝗢𝗡𝗧』\n┇ 🕵 *Dev* : 𝗖𝗔𝗥𝗟 𝗪𝗜𝗟𝗟𝗜𝗔𝗠\n┇ 📱 *User* : " + s.OWNER_NAME + "\n└▪︎─═━┈━═─ ═▪︎─═━┈━═─⊷\n╒✦•··············•••••••••··············•··•✦\n┇ 『𝗕𝗢𝗧 𝗦𝗧𝗔𝗧𝗨𝗦』\n┇ ─┉┈◈◉◈┈┉\n┇ 🛡️ Security : encrypted\n┇ 📡 *Platform* : " + os.platform + "\n┇ ☋️ Version : [6.2.1]\n╘✦•·············•••••••••··················•✦ \n\n";
  let _0x2fd30c = " \n\n ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄\n \n◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢\n> CYBERION-SPARK-X \n◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢\n╭───────────────────⊷❒\n│DEDICATED PLUGINS❒⁠⁠⁠⁠\n│CYBERION-Spark-X❒⁠⁠\n⁠⁠⁠⁠╰───────────────────⊷❒\n> BOT CHANNEL : https://whatsapp.com/channel/0029Vak0genJ93wQXq3q6X3h\n\n> CARLTECH PROJECT 2024🎖\n";
  for (const _0x567ead in _0x480772) {
    _0x2fd30c += "*╭────⊙* *" + _0x567ead + "* *⊙*";
    for (const _0x24c1a9 of _0x480772[_0x567ead]) {
      _0x2fd30c += " \n*┋* " + _0x24c1a9;
    }
    _0x2fd30c += "\n*┕───────────────────❒* \n";
  }
  _0x2fd30c += "\n \n \n\n\n \n *◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢*\n \n\n \n*✰─────━┿─✰┿━───────━✰*\n";
  var _0x19010e = _0xf52443();
  if (_0x19010e.match(/\.(mp4|gif)$/i)) {
    try {
      _0x2ea67f.sendMessage(_0x235dfd, {
        'video': {
          'url': _0x19010e
        },
        'caption': _0x53b6fa + _0x2fd30c,
        'footer': "Je suis *Zokou-MD*, développé par Djalega++",
        'gifPlayback': true
      }, {
        'quoted': _0x4e95b0
      });
    } catch (_0x42eb55) {
      console.log("🥵🥵 Menu erreur " + _0x42eb55);
      _0xd05731("🥵🥵 Menu erreur " + _0x42eb55);
    }
  } else {
    if (_0x19010e.match(/\.(jpeg|png|jpg)$/i)) {
      try {
        _0x2ea67f.sendMessage(_0x235dfd, {
          'image': {
            'url': _0x19010e
          },
          'caption': _0x53b6fa + _0x2fd30c,
          'footer': "*Ibrahim-tech*"
        }, {
          'quoted': _0x4e95b0
        });
      } catch (_0x39023e) {
        console.log("🥵🥵 Menu erreur " + _0x39023e);
        _0xd05731("🥵🥵 Menu erreur " + _0x39023e);
      }
    } else {
      _0xd05731(_0x53b6fa + _0x2fd30c);
    }
  }
});

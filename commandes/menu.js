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
}, async (_0x624d64, _0x3d65ea, _0x3d1428) => {
  let {
    ms: _0x240b80,
    repondre: _0xa08721,
    prefixe: _0x90a9e5,
    nomAuteurMessage: _0x3468f7,
    mybotpic: _0x36faab
  } = _0x3d1428;
  let {
    cm: _0x22e2ff
  } = require(__dirname + "/../framework//zokou");
  var _0x5b7fa9 = {};
  var _0x34a995 = "public";
  if (s.MODE.toLocaleLowerCase() != "yes") {
    _0x34a995 = "private";
  }
  _0x22e2ff.map(async (_0x472f44, _0x54320e) => {
    if (!_0x5b7fa9[_0x472f44.categorie]) {
      _0x5b7fa9[_0x472f44.categorie] = [];
    }
    _0x5b7fa9[_0x472f44.categorie].push(_0x472f44.nomCom);
  });
  moment.tz.setDefault("Africa/Nairobi");
  const _0x1341d8 = moment().format("HH:mm:ss");
  let _0x5eadcd = "\n\n 👋 *Hello* : " + _0x3468f7 + "\n┏───────────────⊷\n┇ 『𝗠𝗔𝗜𝗡』\n┇ 🌐 *Mode* : 【" + _0x34a995 + "】\n┇ 🔑 ignition : [" + s.PREFIXE + "]\n┇ 📜 Plugins : [" + _0x22e2ff.length + "] \n┇ ⌚️ *Time* : " + _0x1341d8 + "\n┇ 🖥️ System : 𝗖𝘆𝗯𝗲𝗿𝗶𝗼𝗻-𝗦𝗽𝗮𝗿𝗸-𝗫\n┇ 🌌 Theme : GALAXY\n┇ ▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄\n└────═━┈┈━═─────⊷\n┏────────────────────⊷────────⊷\n┇ 『𝗦𝗧𝗢𝗥𝗔𝗚𝗘』\n┇ 📼 *Ram* : " + format(os.totalmem() - os.freemem()) + '/' + format(os.totalmem()) + "\n└─────═━┈┈━═─────⊷\n╭━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷\n┇ 『𝗖𝗢𝗡𝗧』\n┇ 🕵 *Dev* : 𝗖𝗔𝗥𝗟 𝗪𝗜𝗟𝗟𝗜𝗔𝗠\n┇ 📱 *User* : " + s.OWNER_NAME + "\n└▪︎─═━┈━═─ ═▪︎─═━┈━═─⊷\n╒✦•··············•••••••••··············•··•✦\n┇ 『𝗕𝗢𝗧 𝗦𝗧𝗔𝗧𝗨𝗦』\n┇ ─┉┈◈◉◈┈┉\n┇ 🛡️ Security : encrypted\n┇ 📡 *Platform* : " + os.platform + "\n┇ ☋️ Version : [6.2.1]\n╘✦•·············•••••••••··················•✦ \n\n";
  let _0x1b198e = " \n\n ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄\n \n◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢\n> CYBERION-SPARK-X \n◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢\n╭───────────────────⊷❒\n│DEDICATED PLUGINS❒⁠⁠⁠⁠\n│CYBERION-Spark-X❒⁠⁠\n⁠⁠⁠⁠╰───────────────────⊷❒\n> BOT CHANNEL : https://whatsapp.com/channel/0029Vak0genJ93wQXq3q6X3h\n\n> CARLTECH PROJECT 2024🎖\n";
  for (const _0x398b89 in _0x5b7fa9) {
    _0x1b198e += "*╭────⊙* *" + _0x398b89 + "* *⊙*";
    for (const _0x546a5a of _0x5b7fa9[_0x398b89]) {
      _0x1b198e += " \n*┋* " + _0x546a5a;
    }
    _0x1b198e += "\n*┕───────────────────❒* \n";
  }
  _0x1b198e += "\n \n \n\n\n \n *◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢*\n \n\n \n*✰─────━┿─✰┿━───────━✰*\n";
  var _0x4c8914 = _0x36faab();
  if (_0x4c8914.match(/\.(mp4|gif)$/i)) {
    try {
      _0x3d65ea.sendMessage(_0x624d64, {
        'video': {
          'url': _0x4c8914
        },
        'caption': _0x5eadcd + _0x1b198e,
        'footer': "Je suis *Zokou-MD*, développé par Djalega++",
        'gifPlayback': true
      }, {
        'quoted': _0x240b80
      });
    } catch (_0x5e4126) {
      console.log("🥵🥵 Menu erreur " + _0x5e4126);
      _0xa08721("🥵🥵 Menu erreur " + _0x5e4126);
    }
  } else {
    if (_0x4c8914.match(/\.(jpeg|png|jpg)$/i)) {
      try {
        _0x3d65ea.sendMessage(_0x624d64, {
          'image': {
            'url': _0x4c8914
          },
          'caption': _0x5eadcd + _0x1b198e,
          'footer': "*Ibrahim-tech*"
        }, {
          'quoted': _0x240b80
        });
      } catch (_0x5c9ab4) {
        console.log("🥵🥵 Menu erreur " + _0x5c9ab4);
        _0xa08721("🥵🥵 Menu erreur " + _0x5c9ab4);
      }
    } else {
      _0xa08721(_0x5eadcd + _0x1b198e);
    }
  }
});

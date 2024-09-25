







const {
  zokou
} = require(__dirname + "/../framework/zokou");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
zokou({
  'nomCom': "conts",
  'categorie': "General"
}, async (_0x4650a2, _0x56f43d, _0x5d82c9) => {
  let {
    ms: _0x232eff,
    repondre: _0x4dc249,
    prefixe: _0xfe638c,
    nomAuteurMessage: _0x2058eb,
    mybotpic: _0x5ba3e1
  } = _0x5d82c9;
  let {
    cm: _0x3883b9
  } = require(__dirname + "/../framework//zokou");
  var _0x279eb8 = {};
  var _0x77d414 = "public";
  if (s.MODE.toLocaleLowerCase() != "yes") {
    _0x77d414 = "private";
  }
  _0x3883b9.map(async (_0x20bffc, _0x32df45) => {
    if (!_0x279eb8[_0x20bffc.categorie]) {
      _0x279eb8[_0x20bffc.categorie] = [];
    }
    _0x279eb8[_0x20bffc.categorie].push(_0x20bffc.nomCom);
  });
  moment.tz.setDefault("Africa/Nairobi");
  var _0xd3033c = _0x5ba3e1();
  if (_0xd3033c.match(/\.(mp4|gif)$/i)) {
    try {
      _0x56f43d.sendMessage(_0x4650a2, {
        'video': {
          'url': _0xd3033c
        },
        'caption': "\n *HELLO DEAR THE ABOVE ARE THE CONTRIBUTORS ON THIS PROJECT*\n \n \n \n*𝐊𝐢𝐧𝐝𝐥𝐲 𝐤𝐧𝐨𝐰 𝐭𝐡𝐢𝐬*\n \n ☆. Ibraah:\n \n ● The Right hand man that took part in the development of Cyberion  and gave the every needed assistance.\n \n ★. CARLTECH:\n \n ● He is the individual who came up with a great idea of generating Cyberion.\n \n ☆ Devibraah:\n \n ● He is the official provider of the base where Cyberion runs.\n \n ╭───────────────────❒\n │ CYBERION❒⁠⁠⁠⁠\n │ CARLTECH❒⁠⁠\n ⁠⁠⁠⁠╰───────────────────❒\n \n \n \n> Made by : 𝗖𝗔𝗥𝗟𝗧𝗘𝗖𝗛\n",
        'footer': "Je suis *Cyberion*, Carltech",
        'gifPlayback': true
      }, {
        'quoted': _0x232eff
      });
    } catch (_0x34ab92) {
      console.log("🥵🥵 Menu erreur " + _0x34ab92);
      _0x4dc249("🥵🥵 Menu erreur " + _0x34ab92);
    }
  } else {
    if (_0xd3033c.match(/\.(jpeg|png|jpg)$/i)) {
      try {
        _0x56f43d.sendMessage(_0x4650a2, {
          'image': {
            'url': _0xd3033c
          },
          'caption': "\n *HELLO DEAR THE ABOVE ARE THE CONTRIBUTORS ON THIS PROJECT*\n \n \n \n*𝐊𝐢𝐧𝐝𝐥𝐲 𝐤𝐧𝐨𝐰 𝐭𝐡𝐢𝐬*\n \n ☆. Ibraah:\n \n ● The Right hand man that took part in the development of Cyberion  and gave the every needed assistance.\n \n ★. CARLTECH:\n \n ● He is the individual who came up with a great idea of generating Cyberion.\n \n ☆ Devibraah:\n \n ● He is the official provider of the base where Cyberion  runs.\n \n ╭───────────────────❒\n │ CYBERION❒⁠⁠⁠⁠\n │ CARLTECH❒⁠⁠\n ⁠⁠⁠⁠╰───────────────────❒\n \n \n \n> Made by : 𝗖𝗔𝗥𝗟𝗧𝗘𝗖𝗛\n",
          'footer': "Je suis *Bugatti*, déveloper Marisel"
        }, {
          'quoted': _0x232eff
        });
      } catch (_0x2cc7a1) {
        console.log("🥵🥵 Menu erreur " + _0x2cc7a1);
        _0x4dc249("🥵🥵 Menu erreur " + _0x2cc7a1);
      }
    } else {
      _0x4dc249("\n *HELLO DEAR THE ABOVE ARE THE CONTRIBUTORS ON THIS PROJECT*\n \n \n \n*𝐊𝐢𝐧𝐝𝐥𝐲 𝐤𝐧𝐨𝐰 𝐭𝐡𝐢𝐬*\n \n ☆. Ibraah:\n \n ● The Right hand man that took part in the development of Cyberion  and gave the every needed assistance.\n \n ★. CARLTECH:\n \n ● He is the individual who came up with a great idea of generating Cyberion.\n \n ☆ Devibraah:\n \n ● He is the official provider of the base where Cyberion  runs.\n \n ╭───────────────────❒\n │ CYBERION❒⁠⁠⁠⁠\n │ CARLTECH❒⁠⁠\n ⁠⁠⁠⁠╰───────────────────❒\n \n \n \n> Made by : 𝗖𝗔𝗥𝗟𝗧𝗘𝗖𝗛\n");
    }
  }
});

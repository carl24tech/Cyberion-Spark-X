const {
  zokou
} = require("../framework/zokou");
const axios = require("axios");
const Genius = require("genius-lyrics");
const Client = new Genius.Client("jKTbbU-6X2B9yWWl-KOm7Mh3_Z6hQsgE4mmvwV3P3Qe7oNa9-hsrLxQV5l5FiAZO");
zokou({
  'nomCom': "bible",
  'reaction': '⛪️',
  'categorie': "General"
}, async (_0x21209d, _0x4e13c1, _0x2b73c6) => {
  const {
    repondre: _0x1a95da,
    arg: arguments,
    ms: _0x3da56d
  } = _0x2b73c6;
  const _0x52aa0e = arguments.join(" ");
  if (!_0x52aa0e) {
    return _0x1a95da("Please specify the book, the chapter and the verse you want to read. Example: bible Romans 6:23");
  }
  let _0x15e3d3 = await fetch("https://bible-api.com/" + _0x52aa0e);
  if (!_0x15e3d3.ok) {
    return _0x1a95da("Please specify the chapter number or name. Example: bible john 3:16");
  }
  let _0x1fe2d4 = await _0x15e3d3.json();
  let _0x50bf4f = "📖 *THE HOLY SCRIPTURE*\n\n📜 *_IN THE BOOK OF:_* " + _0x1fe2d4.reference + "\n\n🌐 *_VERSE:_* " + _0x1fe2d4.verses.length + "\n\n🤔 *_AND IT SAYS:_* " + _0x1fe2d4.text + "\n\n🌐 *_SUPPORTED IN_:* " + _0x1fe2d4.translation_name + "\n\n\n╭▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣\n│ *_HOLY SCRIPT BY CYBERION._*\n╰▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣";
  await _0x1a95da(_0x50bf4f);
});
zokou({
  'nomCom': "poll",
  'reaction': '📊',
  'categorie': "General"
}, async (_0x3744c4, _0x1406ed, _0x5cc028) => {
  const {
    repondre: _0x7b7155,
    arg: arguments,
    ms: _0x207951
  } = _0x5cc028;
  const _0x3dc0ee = arguments.join(" ");
  let [_0x8fe21, _0x25253d] = _0x3dc0ee.split('/');
  if (_0x3dc0ee.split('/').length < 2) {
    return _0x7b7155("Incorrect format.\nExample: poll what is 1+1/2, 3, 4");
  }
  let _0x16dc5b = [];
  for (let _0x1ecc05 of _0x25253d.split(',')) {
    _0x16dc5b.push(_0x1ecc05);
  }
  await _0x1406ed.sendMessage(_0x3744c4, {
    'poll': {
      'name': _0x8fe21,
      'values': _0x16dc5b
    }
  });
});
zokou({
  'nomCom': "fact",
  'reaction': '✌️',
  'categorie': "User"
}, async (_0x263b53, _0x2ee108, _0x329aee) => {
  const {
    repondre: _0x5b2639,
    arg: arguments,
    ms: _0x4bd503
  } = _0x329aee;
  const _0x2e40d6 = await fetch("https://nekos.life/api/v2/fact");
  const _0x1be617 = await _0x2e40d6.json();
  _0x5b2639("◆█▒▒▒▒▒✦FACT✦▒▒▒▒▒█◆ \n*◇* " + _0x1be617.fact + "\n\n\n\n\n*◇* Brought by *CARLTECH*\n\n┏▬▭▬▭▬▭▬▭▬▭▬▭◇\n┃◇ *CYBERION FOREVER*\n┕▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬●■ ");
});
zokou({
  'nomCom': "quotes",
  'reaction': '🗿',
  'categorie': "User"
}, async (_0x19df46, _0x2f6f30, _0x138d7c) => {
  const {
    repondre: _0x682f8,
    arg: arguments,
    ms: _0x32d35e
  } = _0x138d7c;
  const _0x37e750 = await fetch("https://favqs.com/api/qotd");
  const _0x2b6e88 = await _0x37e750.json();
  const _0x52686e = "\n ✧█▒▒▒▒▒▒✧QUOTE✧▒▒▒▒▒▒█✧ \n◇ _" + _0x2b6e88.quote.body + "_\n\n\n◇ *AUTHOR:* " + _0x2b6e88.quote.author + "\n\n\n\n\n◇ _Engine by:_ *CARLTECH*\n\n\n┏▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣◇\n┃◇ *CYBERION FOREVER*\n ┕▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣ ";
  _0x682f8(_0x52686e);
});
zokou({
  'nomCom': "define",
  'reaction': '😇',
  'categorie': "Search"
}, async (_0x442562, _0x24f6c7, _0x296c0e) => {
  const {
    repondre: _0x3a5ede,
    arg: arguments,
    ms: _0x5df0cf
  } = _0x296c0e;
  if (!arguments || arguments.length === 0) {
    return _0x3a5ede("Provide a term");
  }
  const _0x59c5ef = arguments.join(" ");
  try {
    let {
      data: _0x30d542
    } = await axios.get("http://api.urbandictionary.com/v0/define?term=" + _0x59c5ef);
    var _0x53734c = "\n Word: " + _0x59c5ef + "\n Definition: " + _0x30d542.list[0].definition.replace(/\[/g, '').replace(/\]/g, '') + "\n Example: " + _0x30d542.list[0].example.replace(/\[/g, '').replace(/\]/g, '');
    return _0x3a5ede(_0x53734c);
  } catch {
    return _0x3a5ede("No result for " + _0x59c5ef);
  }
});
zokou({
  'nomCom': "lyrics",
  'reaction': '🎼',
  'categorie': "Search"
}, async (_0x4a42af, _0x2052cc, _0x2850f1) => {
  const {
    repondre: _0x4a569f,
    arg: arguments,
    ms: _0x519fb1
  } = _0x2850f1;
  try {
    if (!arguments || arguments.length === 0) {
      return _0x4a569f("Uuh dear Please provide me the song name");
    }
    const _0x5e521b = arguments.join(" ");
    const _0x35d9a8 = await Client.songs.search(_0x5e521b);
    const _0x303383 = _0x35d9a8[0];
    console.log(_0x303383);
    const _0x3564fc = await _0x303383.lyrics();
    const _0x4332e3 = await _0x303383.artist.name;
    const _0x51e734 = await _0x303383.title;
    const _0x27d634 = "*Cyberion-Spark-X LYRICS FINDER*\n\n*TITLE* - " + _0x51e734 + "\n\n*ARTIST* - " + _0x4332e3 + "\n\n" + _0x3564fc;
    await _0x2052cc.sendMessage(_0x4a42af, {
      'image': {
        'url': "./media/lyrics-img.jpg"
      },
      'caption': _0x27d634
    }, {
      'quoted': _0x519fb1
    });
  } catch (_0x356471) {
    _0x4a569f("Error occurred: " + _0x356471);
    console.log(_0x356471);
  }
});

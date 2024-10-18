

const {
  zokou
} = require('../framework/zokou');
const yts = require('yt-search');
zokou({
  'nomCom': "video",
  'categorie': "Search",
  'reaction': '👀'
}, async (_0x3a6027, _0x19584d, _0x6cc5b8) => {
  const {
    ms: _0x5ab659,
    repondre: _0x512fbc,
    arg: _0x3bff9
  } = _0x6cc5b8;
  if (!_0x3bff9[0x0]) {
    _0x512fbc("Please insert a song/video name,You can go to youtube as well 🤣.");
    return;
  }
  try {
    let _0x3b65a7 = _0x3bff9.join(" ");
    let _0x23da4f = [];
    const _0x5b52a6 = await yts(_0x3b65a7);
    _0x23da4f = _0x5b52a6.videos;
    if (_0x23da4f && _0x23da4f.length > 0x0) {
      const _0x4100df = await fetch("https://api.ibrahimadams.us.kg/api/download/ytmp4?url=" + encodeURIComponent(_0x194b74) + "&apikey=" + 'my-friend');
      const _0x8083c0 = await _0x4100df.json();
      if (_0x8083c0.status === 0xc8 && _0x8083c0.success) {
        const _0x1316a3 = _0x8083c0.result.download_url;
        const _0x509a37 = {
          'image': {
            'url': _0x23da4f[0x0].thumbnail
          },
          'caption': "YOUTUBE SEARCH BY MUNGAI\n\n ©Mungai Yobih"
        };
        await _0x19584d.sendMessage(_0x3a6027, _0x509a37, {
          'quoted': _0x5ab659
        });
        await _0x19584d.sendMessage(_0x3a6027, {
          'video': {
            'url': _0x1316a3
          },
          'mimetype': "video/mp4"
        }, {
          'quoted': _0x5ab659
        });
        _0x512fbc("Downloded Successfully I'M Mungai ✅");
      } else {
        _0x512fbc('Searching...⏳');
      }
    } else {
      _0x512fbc("No videos found.");
    }
  } catch (_0x59aea4) {
    console.error("Error from API:", _0x59aea4);
    _0x512fbc("Searching...⏳");
  }
});
zokou({
  'nomCom': "play",
  'categorie': 'Download',
  'reaction': '🎧'
}, async (_0x5168b7, _0x1d6d3f, _0x3b9b4d) => {
  const {
    ms: _0x4a0a34,
    repondre: _0x278d4d,
    arg: _0x56e719
  } = _0x3b9b4d;
  if (!_0x56e719[0x0]) {
    _0x278d4d("Please insert a song name stupid niggah 😅.");
    return;
  }
  try {
    let _0x6f9dbe = _0x56e719.join(" ");
    let _0x346271 = [];
    const _0x4d116c = await yts(_0x6f9dbe);
    _0x346271 = _0x4d116c.videos;
    if (_0x346271 && _0x346271.length > 0x0) {
      const _0x57c0e7 = await fetch("https://api.ibrahimadams.us.kg/api/download/ytmp3?url=" + encodeURIComponent(_0x571980) + "&apikey=" + "my-friend");
      const _0x142df5 = await _0x57c0e7.json();
      if (_0x142df5.status === 0xc8 && _0x142df5.success) {
        const _0x235e52 = _0x142df5.result.download_url;
        const _0x319cdf = {
          'image': {
            'url': _0x346271[0x0].thumbnail
          },
          'caption': "YOUTUBE SEARCH BY MUNGAI\n\n ©Mungai Yobih"
        };
        await _0x1d6d3f.sendMessage(_0x5168b7, _0x319cdf, {
          'quoted': _0x4a0a34
        });
        await _0x1d6d3f.sendMessage(_0x5168b7, {
          'audio': {
            'url': _0x235e52
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0x4a0a34
        });
        _0x278d4d("Downloded Successfully I'm Mungai ✅");
      } else {
        _0x278d4d("Failed to download audio. Mungai is working on it.");
      }
    } else {
      _0x278d4d("No audio found.");
    }
  } catch (_0x12b52d) {
    console.error("Error from API:", _0x12b52d);
    _0x278d4d("An error occurred while searching or downloading the audio, Be cool Mungai is fixing.");
  }
});
zokou({
  'nomCom': "song",
  'categorie': "Download",
  'reaction': '🎸'
}, async (_0x202967, _0x1761c4, _0x1a3bdd) => {
  const {
    ms: _0x460a78,
    repondre: _0x2a80a1,
    arg: _0x13dcd6
  } = _0x1a3bdd;
  if (!_0x13dcd6[0x0]) {
    _0x2a80a1("Please insert a song name Stupid niggah.");
    return;
  }
  try {
    let _0x54f10c = _0x13dcd6.join(" ");
    let _0x18d954 = [];
    const _0x15e221 = await yts(_0x54f10c);
    _0x18d954 = _0x15e221.videos;
    if (_0x18d954 && _0x18d954.length > 0x0) {
      const _0x316929 = await fetch("https://api.ibrahimadams.us.kg/api/download/ytmp3?url=" + encodeURIComponent(_0x571980) + "&apikey=" + "my-friend");
      const _0x3666e0 = await _0x316929.json();
      if (_0x3666e0.status === 0xc8 && _0x3666e0.success) {
        const _0x1c2944 = _0x3666e0.result.download_url;
        const _0xb1e9c1 = {
          'image': {
            'url': _0x18d954[0x0].thumbnail
          },
          'caption': "YOUTUBE SEARCH BY MUNGAI\n\n ©Mungai Yobih"
        };
        await _0x1761c4.sendMessage(_0x202967, _0xb1e9c1, {
          'quoted': _0x460a78
        });
        await _0x1761c4.sendMessage(_0x202967, {
          'audio': {
            'url': _0x1c2944
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0x460a78
        });
        _0x2a80a1("Downloded Successfully I'M Mungai✅");
      } else {
        _0x2a80a1("Failed to download audio. Mungai is working on it.");
      }
    } else {
      _0x2a80a1("No audio found you can go to youtube stupid niggah.");
    }
  } catch (_0x18ca74) {
    console.error("Error from API:", _0x18ca74);
    _0x2a80a1("An error occurred while searching or downloading the audio Mungai is working on it be cool.");
  }
});

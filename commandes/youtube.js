


















const {
  zokou
} = require("../framework/zokou");
const yts = require("yt-search");
zokou({
  'nomCom': "play",
  'categorie': "Search",
  'reaction': '🎧'
}, async (_0x2ff33f, _0x540558, _0x46173d) => {
  const {
    ms: _0x571b06,
    repondre: _0x1349e8,
    arg: _0x263b1f
  } = _0x46173d;
  if (!_0x263b1f[0]) {
    _0x1349e8("Please insert a song name.");
    return;
  }
  try {
    let _0x1d45b3 = _0x263b1f.join(" ");
    let _0x128231 = [];
    const _0x53c0f4 = await yts(_0x1d45b3);
    _0x128231 = _0x53c0f4.videos;
    if (_0x128231 && _0x128231.length > 0) {
      const _0x4dc262 = _0x128231[0].url;
      const _0x302999 = await fetch("https://gifted-apis-third-30b2fdbb9819.herokuapp.com/api/download/ytmp3?url=" + encodeURIComponent(_0x4dc262) + "&apikey=" + "giftedtechk");
      const _0x2a5db8 = await _0x302999.json();
      if (_0x2a5db8.status === 200 && _0x2a5db8.success) {
        const _0x548e38 = _0x2a5db8.result.download_url;
        const _0x4d4022 = {
          'image': {
            'url': _0x128231[0].thumbnail
          },
          'caption': "*CYBERION-SPARK-X MEDIA PLAYER*"
        };
        await _0x540558.sendMessage(_0x2ff33f, _0x4d4022, {
          'quoted': _0x571b06
        });
        await _0x540558.sendMessage(_0x2ff33f, {
          'audio': {
            'url': _0x548e38
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0x571b06
        });
        _0x1349e8("*Lol..media successfully downloaded*");
      } else {
        _0x1349e8("Failed to download audio. Please try again later.");
      }
    } else {
      _0x1349e8("No audio found.");
    }
  } catch (_0xa5a7d) {
    console.error("Error from API:", _0xa5a7d);
    _0x1349e8("An error occurred while searching or downloading the audio.");
  }
});
zokou({
  'nomCom': "song",
  'categorie': "Search",
  'reaction': '🎸'
}, async (_0x38217c, _0x32d241, _0x5af5bc) => {
  const {
    ms: _0x1b4ba0,
    repondre: _0x2594b0,
    arg: _0x2b0c40
  } = _0x5af5bc;
  if (!_0x2b0c40[0]) {
    _0x2594b0("Please insert a song name.");
    return;
  }
  try {
    let _0xb11891 = _0x2b0c40.join(" ");
    let _0x1d9a75 = [];
    const _0x5513df = await yts(_0xb11891);
    _0x1d9a75 = _0x5513df.videos;
    if (_0x1d9a75 && _0x1d9a75.length > 0) {
      const _0x2b08aa = _0x1d9a75[0].url;
      const _0x1c2fb5 = await fetch("https://gifted-apis-third-30b2fdbb9819.herokuapp.com/api/download/ytmp3?url=" + encodeURIComponent(_0x2b08aa) + "&apikey=" + "giftedtechk");
      const _0x2c35d1 = await _0x1c2fb5.json();
      if (_0x2c35d1.status === 200 && _0x2c35d1.success) {
        const _0xb70b89 = _0x2c35d1.result.download_url;
        const _0x5d26cd = {
          'image': {
            'url': _0x1d9a75[0].thumbnail
          },
          'caption': "*CYBERION-SPARK-X MEDIA PLAYER*"
        };
        await _0x32d241.sendMessage(_0x38217c, _0x5d26cd, {
          'quoted': _0x1b4ba0
        });
        await _0x32d241.sendMessage(_0x38217c, {
          'document': {
            'url': _0xb70b89
          },
          'mimetype': "audio/mpeg"
        }, {
          'quoted': _0x1b4ba0
        });
        _0x2594b0("*Downloaded*");
      } else {
        _0x2594b0("Failed to download audio. Please try again later.");
      }
    } else {
      _0x2594b0("No audio found.");
    }
  } catch (_0x33de37) {
    console.error("Error from API:", _0x33de37);
    _0x2594b0("An error occurred while searching or downloading the audio.");
  }
});
zokou({
  'nomCom': "video",
  'categorie': "Search",
  'reaction': '🎬'
}, async (_0x6c0729, _0x29e56a, _0x1ecfb7) => {
  const {
    ms: _0x34d9f2,
    repondre: _0x172f71,
    arg: _0x3efd42
  } = _0x1ecfb7;
  if (!_0x3efd42[0]) {
    _0x172f71("Please insert a song/video name.");
    return;
  }
  try {
    let _0x55760c = _0x3efd42.join(" ");
    let _0x3c942e = [];
    const _0x2734e1 = await yts(_0x55760c);
    _0x3c942e = _0x2734e1.videos;
    if (_0x3c942e && _0x3c942e.length > 0) {
      const _0x592a15 = _0x3c942e[0].url;
      const _0x1f6f93 = await fetch("https://gifted-apis-third-30b2fdbb9819.herokuapp.com/api/download/ytmp3?url=" + encodeURIComponent(_0x592a15) + "&apikey=" + "giftedtechk");
      const _0x30e721 = await _0x1f6f93.json();
      if (_0x30e721.status === 200 && _0x30e721.success) {
        const _0x39d02c = _0x30e721.result.download_url;
        const _0x2b92a1 = {
          'image': {
            'url': _0x3c942e[0].thumbnail
          },
          'caption': "*CYBERION-SPARK-X MEDIA PLAYER*"
        };
        await _0x29e56a.sendMessage(_0x6c0729, _0x2b92a1, {
          'quoted': _0x34d9f2
        });
        await _0x29e56a.sendMessage(_0x6c0729, {
          'video': {
            'url': _0x39d02c
          },
          'mimetype': "video/mp4"
        }, {
          'quoted': _0x34d9f2
        });
        _0x172f71("*Lol..media successfully downloaded*");
      } else {
        _0x172f71("Failed to download the video. Please try again later.");
      }
    } else {
      _0x172f71("No videos found.");
    }
  } catch (_0xb66bb) {
    console.error("Error from API:", _0xb66bb);
    _0x172f71("An error occurred while searching or downloading the video.");
  }
});

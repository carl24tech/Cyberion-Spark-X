











































const {
  zokou
} = require("../framework/zokou");
const yts = require("yt-search");
zokou({
  'nomCom': "play",
  'categorie': "Search",
  'reaction': '🎧'
}, async (_0x30bfdc, _0x34aa5e, _0x4c3b8b) => {
  const {
    ms: _0x3b0c84,
    repondre: _0x13f6c9,
    arg: _0x412c79
  } = _0x4c3b8b;
  if (!_0x412c79[0]) {
    _0x13f6c9("Please insert a song name.");
    return;
  }
  try {
    let _0x5e5ebc = _0x412c79.join(" ");
    let _0x35a301 = [];
    const _0x4dc16c = await yts(_0x5e5ebc);
    _0x35a301 = _0x4dc16c.videos;
    if (_0x35a301 && _0x35a301.length > 0) {
      const _0x1fc663 = _0x35a301[0].url;
      const _0x1f08b9 = await fetch("https://gifted-apis-third-30b2fdbb9819.herokuapp.com/api/download/ytmp3?url=" + encodeURIComponent(_0x1fc663) + "&apikey=" + "giftedtechk");
      const _0x31d89b = await _0x1f08b9.json();
      if (_0x31d89b.status === 200 && _0x31d89b.success) {
        const _0xaaff03 = _0x31d89b.result.download_url;
        const _0x30d866 = {
          'image': {
            'url': _0x35a301[0].thumbnail
          },
          'caption': "*CYBERION-SPARK-X MEDIA PLAYER*"
        };
        await _0x34aa5e.sendMessage(_0x30bfdc, _0x30d866, {
          'quoted': _0x3b0c84
        });
        await _0x34aa5e.sendMessage(_0x30bfdc, {
          'audio': {
            'url': _0xaaff03
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0x3b0c84
        });
        _0x13f6c9("*Lol..media successfully downloaded*");
      } else {
        _0x13f6c9("Failed to download audio. Please try again later.");
      }
    } else {
      _0x13f6c9("No audio found.");
    }
  } catch (_0x516123) {
    console.error("Error from API:", _0x516123);
    _0x13f6c9("An error occurred while searching or downloading the audio.");
  }
});
zokou({
  'nomCom': "song",
  'categorie': "Search",
  'reaction': '🎸'
}, async (_0x30de0e, _0x3d0e37, _0x28fdf5) => {
  const {
    ms: _0x55df62,
    repondre: _0x41d0e4,
    arg: _0x390c6d
  } = _0x28fdf5;
  if (!_0x390c6d[0]) {
    _0x41d0e4("Please insert a song name.");
    return;
  }
  try {
    let _0x5ac036 = _0x390c6d.join(" ");
    let _0xf5f434 = [];
    const _0x4aa79e = await yts(_0x5ac036);
    _0xf5f434 = _0x4aa79e.videos;
    if (_0xf5f434 && _0xf5f434.length > 0) {
      const _0x2437d6 = _0xf5f434[0].url;
      const _0x426496 = await fetch("https://gifted-apis-third-30b2fdbb9819.herokuapp.com/api/download/ytmp3?url=" + encodeURIComponent(_0x2437d6) + "&apikey=" + "giftedtechk");
      const _0x4ecd9d = await _0x426496.json();
      if (_0x4ecd9d.status === 200 && _0x4ecd9d.success) {
        const _0x420470 = _0x4ecd9d.result.download_url;
        const _0x1ec267 = {
          'image': {
            'url': _0xf5f434[0].thumbnail
          },
          'caption': "*CYBERION-SPARK-X MEDIA PLAYER*"
        };
        await _0x3d0e37.sendMessage(_0x30de0e, _0x1ec267, {
          'quoted': _0x55df62
        });
        await _0x3d0e37.sendMessage(_0x30de0e, {
          'document': {
            'url': _0x420470
          },
          'mimetype': "audio/mpeg"
        }, {
          'quoted': _0x55df62
        });
        _0x41d0e4("*Downloaded*");
      } else {
        _0x41d0e4("Failed to download audio. Please try again later.");
      }
    } else {
      _0x41d0e4("No audio found.");
    }
  } catch (_0x238a9e) {
    console.error("Error from API:", _0x238a9e);
    _0x41d0e4("An error occurred while searching or downloading the audio.");
  }
});
zokou({
  'nomCom': "video",
  'categorie': "Search",
  'reaction': '🎬'
}, async (_0x4c7e97, _0x4f18d4, _0x2655b2) => {
  const {
    ms: _0x2c2317,
    repondre: _0x316380,
    arg: _0x35f57c
  } = _0x2655b2;
  if (!_0x35f57c[0]) {
    _0x316380("Please insert a song/video name.");
    return;
  }
  try {
    let _0x4729c0 = _0x35f57c.join(" ");
    let _0x525817 = [];
    const _0x453022 = await yts(_0x4729c0);
    _0x525817 = _0x453022.videos;
    if (_0x525817 && _0x525817.length > 0) {
      const _0x2013a8 = _0x525817[0].url;
      const _0x1ff9d6 = await fetch("https://gifted-apis-third-30b2fdbb9819.herokuapp.com/api/download/ytmp3?url=" + encodeURIComponent(_0x2013a8) + "&apikey=" + "giftedtechk");
      const _0x4fc0e8 = await _0x1ff9d6.json();
      if (_0x4fc0e8.status === 200 && _0x4fc0e8.success) {
        const _0x1bc2eb = _0x4fc0e8.result.download_url;
        const _0x1f3ef0 = {
          'image': {
            'url': _0x525817[0].thumbnail
          },
          'caption': "*CYBERION-SPARK-X MEDIA PLAYER*"
        };
        await _0x4f18d4.sendMessage(_0x4c7e97, _0x1f3ef0, {
          'quoted': _0x2c2317
        });
        await _0x4f18d4.sendMessage(_0x4c7e97, {
          'video': {
            'url': _0x1bc2eb
          },
          'mimetype': "video/mp4"
        }, {
          'quoted': _0x2c2317
        });
        _0x316380("*Lol..media successfully downloaded*");
      } else {
        _0x316380("Failed to download the video. Please try again later.");
      }
    } else {
      _0x316380("No videos found.");
    }
  } catch (_0x454ed9) {
    console.error("Error from API:", _0x454ed9);
    _0x316380("An error occurred while searching or downloading the video.");
  }
});

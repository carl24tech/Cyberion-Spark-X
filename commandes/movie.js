const { zokou } = require("../framework/zokou");
const { getJson } = require("../framework/utils");

zokou({
  nomCom: "movie",
  categorie: "Search",
  reaction: "🎞"
}, async (origineMessage, zk, commandeOptions) => {
  const { repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Quel film veux-tu ?");
    return;
  }

  const movieTitle = arg.join(" ");
  const movie = await getJson(
    `http://www.omdbapi.com/?apikey=742b2d09&t=${encodeURIComponent(movieTitle)}&plot=full`
  );

  if (movie.Response !== 'True') {
    repondre('*Not found*');
    return;
  }

  let msg = '';
  const url = movie.Poster;
  delete movie.Poster;
  delete movie.Response;
  delete movie.Ratings;

  for (const data in movie) {
    if (movie[data] !== 'N/A') {
      msg += `*${data} :* ${movie[data]}\n`;
    }
  }

  if (url === 'N/A') {
    repondre(msg.trim());
  } else {
    await zk.sendMessage(origineMessage.from, { url }, { caption: msg.trim() });
  }
});

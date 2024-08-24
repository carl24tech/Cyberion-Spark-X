const axios = require('axios');
const fs = require('fs');
const { zokou } = require("../framework/zokou");
const { writeFile } = require('fs/promises')

// Commande waifu
zokou({
  nomCom: "carl",
  categorie: "Weeb",
  reaction: "😏"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://telegra.ph/file/67867a68063334c516894.jpg'; // Remplacez avec le lien réel de l'API waifu.pics

  try {
    
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(url);
      const imageUrl = response.data.url;

      zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms });
    }
  } catch (error) {
    repondre('Erreur lors de la récupération des données :', error);
  }
});

// Commande neko
zokou({
  nomCom: "william",
  categorie: "Weeb",
  reaction: "😉"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://telegra.ph/file/eb92cca50f07bb52f030d.jpg'; // Remplacez avec le lien réel de l'API waifu.pics ou une autre API de nekos

  try {
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(url);
      const imageUrl = response.data.url;

      zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms });
    }
  } catch (error) {
    repondre('Erreur lors de la récupération des données :', error);
  }
});

// Commande shinobu
zokou({
  nomCom: "king",
  categorie: "Weeb",
  reaction: "👑"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://telegra.ph/file/10293b39bc439c0abc513.jpg'; // Remplacez avec le lien réel de l'API waifu.pics ou une autre API avec des images de Shinobu

  try {
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(url);
      const imageUrl = response.data.url;

      zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms });
    }
  } catch (error) {
    repondre('Erreur lors de la récupération des données :', error);
  }
});

// Commande megumin
zokou({
  nomCom: "carltech",
  categorie: "Weeb",
  reaction: "🦁"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://telegra.ph/file/5c8bc70bf5ae0eb1697a7.jpg'; // Remplacez avec le lien réel de l'API waifu.pics ou une autre API avec des images de Megumin

  try {
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(url);
      const imageUrl = response.data.url;

      zk.sendMessage(origineMessage,{ image: { url: imageUrl } }, { quoted: ms });
    }
  } catch (error) {
    repondre('Erreur lors de la récupération des données :', error);
  }
});



zokou({
  nomCom: "kingcarl",
  categorie: "Weeb",
  reaction: "🫅"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;



  try {
    for (let i = 0; i < 5; i++) {
      let url = 'https://telegra.ph/file/a28d7efa5b0d14219d4d4.jpg'
      
   const response = await   axios.get(url, { responseType: 'arraybuffer' })

  

  const image = response.data;

   await writeFile('./cosplay.jpg', image)
      zk.sendMessage(origineMessage,{image : {url : `./cosplay.jpg`}},{quoted :ms}) }
  
  } catch (e) {
    repondre("je reçois malheureusement une erreur : " + e);
  }
});


zokou({nomCom:"king",categorie: "Weeb",reaction : "💞"},async(dest,zk,commandeOptions)=>{ const {repondre , ms} = commandeOptions;
    let api = 'https://telegra.ph/file/a28d7efa5b0d14219d4d4.jpg'
  try {
     repondre('she/he dont love you :)')
 const result = await axios.get(api)
  

    zk.sendMessage(dest, { image: { url: result.data.male }, caption: `For Man` }, { quoted: ms })
        zk.sendMessage(dest, { image: { url: result.data.female }, caption: `_For woman_` }, { quoted: ms })
    
  } catch (e) { repondre(e)}                                                                                        
  
}
      )


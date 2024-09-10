// Importez dotenv et chargez les variables d'environnement depuis le fichier .env
require("dotenv").config();

const { Pool } = require("pg");

// Utilisez le module 'set' pour obtenir la valeur de DATABASE_URL depuis vos configurations
const s = require("../set");

// Récupérez l'URL de la base de données de la variable s.DATABASE_URL
var dbUrl=s.DATABASE_URL?s.DATABASE_URL:"postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9"
const proConfig = {
  connectionString: dbUrl,
  ssl: {
    rejectUnauthorized: false,
  },
};

// Créez une pool de connexions PostgreSQL
const pool = new Pool(proConfig);

const creerTableAfk = async () => {
    try {
      await pool.query(`
        CREATE TABLE IF NOT EXISTS afk (
          id serial PRIMARY KEY,
          etat text DEFAULT 'off',
          message text,
          lien text
        );
      `);
      console.log("La table 'afk' a été créée avec succès.");
    } catch (e) {
      console.error("Une erreur est survenue lors de la création de la table 'afk':", e);
    }
  };

  creerTableAfk() ;

async function addOrUpdateAfk(id, message, lien) {
    try {
       await pool.query(`
        INSERT INTO afk (id, message, lien)
        VALUES ($1, $2, $3)
        ON CONFLICT (id)
        DO UPDATE SET message = $2, lien = $3;
      `, [id, message, lien]);

      console.log("L'enregistrement AFK a été ajouté ou mis à jour avec succès.");
    } catch (e) {
      console.error("Une erreur est survenue lors de l'ajout ou de la mise à jour de l'enregistrement AFK:", e);
    }
}

async function getAfkById(id) {
    try {
    const {rows} = await pool.query(`
        SELECT * FROM afk
        WHERE id = $1;
      `, [id]);

      return rows[0];
    } catch (e) {
      console.error("Une erreur est survenue lors de la récupération de l'enregistrement AFK par ID:", e);
      return null;
    }
} ;

async function changeAfkState(id, etat) {
    try {
      const result = await pool.query(`
        UPDATE afk
        SET etat = $1
        WHERE id = $2
        RETURNING *;
      `, [etat, id]);

      if (result.rows.length === 0) {
          console.log("L'enregistrement AFK n'existe pas.");
          return "not defined";
      } else {
          console.log("L'état de l'enregistrement AFK a été modifié avec succès.");
          return "succes" ;
      }
    } catch (e) {
      console.error("Une erreur est survenue lors du changement de l'état de l'enregistrement AFK:", e);
    }
}

module.exports = {

      addOrUpdateAfk,
      getAfkById,
      changeAfkState
}

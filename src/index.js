import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

//appel de la config .dotenv
dotenv.config();

//gestion des routes et des requêtes HTTP.
const app = express();

//creation de la BDD
const port = process.env.PORT;
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log(`📁 DATABASE CONNECTED 🐳`);
}

//permet d'ouvrir l'API à des requêtes provenant de domaines différents.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//route test du port
app.get("/", (req, res) => {
  res.send("Welcome on API");
});

//ecoute du port
app.listen(port, () =>
  console.log(`Server is listening on port : http://localhost:${port}`)
);

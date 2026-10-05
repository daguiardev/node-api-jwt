// src/app.ts

import express from "express";
import cors from "cors";

const app = express();

// Permite que a API receba dados no formato JSON.
app.use(express.json());

// Habilita requisições de outras origens.
// Posteriormente, configuraremos as origens permitidas pelo .env.
app.use(cors());

// Rota temporária para verificar se a API está funcionando.
app.get("/health", (_request, response) => {
  return response.status(200).json({
    status: "ok",
    message: "API funcionando corretamente."
  });
});

export { app };
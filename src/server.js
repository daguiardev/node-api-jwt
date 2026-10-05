// src/server.ts

import { app } from "./app";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor executando na porta ${PORT}`);
  console.log(`API disponível em http://localhost:${PORT}`);
});
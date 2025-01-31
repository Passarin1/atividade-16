import dotenv from "dotenv";
import express from "express";
import roteadorUsuario from "src/routes/usuario.js";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "luis henrique",
  });
});

// Importando o roteador de usuário
app.use(roteadorUsuario);

app.listen(port, () => {
  console.log(`Serviço escutando na porta:  ${port}`);
});

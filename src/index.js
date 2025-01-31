import roteadorUsuario from "src/routes/usuario.js";
import dotenv from "dotenv";
import express from "express";
dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "luis henrique ",
  });
});

app.use(roteadorUsuario);

app.listen(port, () => {
  // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});


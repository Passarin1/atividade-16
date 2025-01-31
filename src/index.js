import roteadorUsuario from "./routes/usuario.js";

import dotenv from "dotenv";
import express from "express";
dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "API para CRUD usuario: link_gitgub",
  });
});

app.listen(port, () => {
  // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});

//src/routes/usuario.js
const router = Router();

router.get("/usuario", async (req, res) => {
  console.log(`Rota GET /usuarios solicitada pelo usuario ${req.userId}`);
  try {
    const usuarios = await selectUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});
export default router;

app.use(roteadorUsuario);
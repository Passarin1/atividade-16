import express from "express";                // Requisição do pacote do express
import dotenv from "dotenv";
import roteadorUsuario from "./src/routes/usuario.js";
dotenv.config();
                      // Importação das funções do BD

const app = express();                        // Instancia o Express
const port = 3000;                            // Define a porta

app.use(express.json());                      // Middleware para parsing JSON

// Rota raiz
app.get("/", (req, res) => {
  console.log("Rota GET/ solicitada");
  res.json({
    nome: "Luis Henrique",                   // Substitua pelo seu nome
  });
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

app.listen(port, () => {
  console.log(`Serviço escutando na porta: ${port}`);
});

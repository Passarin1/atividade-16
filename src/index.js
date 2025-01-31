import express from "express";
import dotenv from "dotenv";
import roteadorUsuario from "src/routes/usuario.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/usuario", roteadorUsuario); // Corrigido para utilizar o roteador corretamente

app.get("/", (req, res) => {
  res.json({
    message: "API para CRUD usuário: link_github",
  });
});

app.listen(port, () => {
  console.log(`Serviço escutando na porta: ${port}`);
});

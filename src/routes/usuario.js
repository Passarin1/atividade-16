//src/routes/usuario.js
import { Router } from "express";
import { selectUsuario, insertUsuario, deleteUsuario, updateUsuario } from "src/db/index.js";

const router = Router();


// Rota GET para buscar um usuário pelo ID
app.get("/usuario/:id", async (req, res) => {
  console.log("Rota GET /usuario/# solicitada");
  try {
    const usuario = await selectUsuario(req.params.id);
    if (usuario.length > 0) res.json(usuario);
    else res.status(404).json({ message: "Usuário não encontrado!" });
  } catch (error) {
    res
      .status(error.status || 500)
      .json({ message: error.message || "Erro!" });
  }
});

// Rota POST para criar um novo usuário
app.post("/usuario", async (req, res) => {
  console.log("Rota POST /usuario solicitada");
  try {
    await insertUsuario(req.body);
    res.status(201).json({ message: "Usuário inserido com sucesso!" });
  } catch (error) {
    res
      .status(error.status || 500)
      .json({ message: error.message || "Erro ao inserir usuário!" });
  }
});

// Rota DELETE para excluir um usuário pelo ID
app.delete("/usuario/:id", async (req, res) => {
  console.log("Rota DELETE /usuario/# solicitada");
  try {
    const usuario = await selectUsuario(req.params.id);
    if (usuario.length > 0) {
      await deleteUsuario(req.params.id);
      res.status(200).json({ message: "Usuário excluído com sucesso!" });
    } else res.status(404).json({ message: "Usuário não encontrado!" });
  } catch (error) {
    res
      .status(error.status || 500)
      .json({ message: error.message || "Erro ao excluir usuário!" });
  }
});

// Rota PUT para atualizar os dados de um usuário pelo ID
app.put("/usuario/:id", async (req, res) => {
  console.log("Rota PUT /usuario/# solicitada");
  try {
    const id = req.params.id;
    const usuario = await selectUsuario(id);
    if (usuario.length > 0) {
      await updateUsuario(id, req.body);
      res.status(200).json({ message: "Usuário atualizado com sucesso!" });
    } else res.status(404).json({ message: "Usuário não encontrado!" });
  } catch (error) {
    res
      .status(error.status || 500)
      .json({ message: error.message || "Erro ao atualizar usuário!" });
  }
});

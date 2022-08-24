const rickandmortyService = require("../services/rickandmorty.service");
const mongoose = require("mongoose");

const findAllcharactersController = async (req, res) => {
  const characters = await rickandmortyService.findAllcharactersService();

  if (characters.lenght == 0) {
    return res.status(404).send({ message: "Nenhum personagem encontrado." });
  }

  res.send(characters);
};

const findByIdcharactersController = async (req, res) => {
  const parametro_id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(parametro_id)) {
    return res.status(400).send({ message: "Id inválido." });
  }
  const escolhacharacters = await rickandmortyService.findByIdcharactersService(
    parametro_id
  );
  if (!escolhacharacters) {
    return res.status(404).send({ message: "Personagem não encontrado." });
  }
  res.send(escolhacharacters);
};

const createcharactersController = async (req, res) => {
  const characters = req.body;
  if (
    !tenistas ||
    !tenistas.nome ||
    !tenistas.ranking ||
    !tenistas.titulos ||
    !tenistas.grandslam ||
    !tenistas.descricao ||
    !tenistas.idade ||
    !tenistas.país
  ) {
    return res
      .status(400)
      .send({ message: "Envie todos os campos preenchidos!" });
  }

  const newtenistas = await tenistasService.createtenistasService(tenistas);
  res.status(201).send(newtenistas);
};

const updatetenistasController = async (req, res) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: "Id inválido." });
  }
  const tenistasEdit = req.body;

  if (
    !tenistasEdit ||
    !tenistasEdit.nome ||
    !tenistasEdit.ranking ||
    !tenistasEdit.titulos ||
    !tenistasEdit.grandslam ||
    !tenistasEdit.descricao ||
    !tenistasEdit.idade ||
    !tenistasEdit.país
  ) {
    return res
      .status(400)
      .send({ message: "Envie todos os campos preenchidos!" });
  }
  const updatedtenistas = await tenistasService.updatetenistasService(
    idParam,
    tenistasEdit
  );
  res.send(updatedtenistas);
};

const deletetenistasController = async (req, res) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: "Id inválido." });
  }
  await tenistasService.deletetenistasService(idParam);
  res.send({ message: "Tenista deletado com sucesso!" });
};

module.exports = {
  findAlltenistasController,
  findByIdtenistaController,
  createtenistasController,
  updatetenistasController,
  deletetenistasController,
};

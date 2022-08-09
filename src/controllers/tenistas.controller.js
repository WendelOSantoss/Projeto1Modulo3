const { reset } = require('nodemon');
const tenistasService = require('../services/tenistas.service');




const findAlltenistasController = (req,res) =>{
    const tenistas = tenistasService.findAlltenistasService();
    res.send(tenistas);
};

const findByIdtenistaController = (req,res) =>{
    const parametro_id = Number(req.params.id);
  const escolhatenista = tenistasService.findByIdtenistaService(parametro_id);
  res.send(escolhatenista);
};

const createtenistasController = (req,res) => {
  const tenistas = req.body;
  const newtenistas = tenistasService.createtenistasService(tenistas);
  res.send(newtenistas);

}

const updatetenistasController = (req, res) => {
    const idParam = Number(req.params.id);
  const tenistasEdit = req.body;
  const updatedtenistas = tenistasService.updatetenistasService(idParam, tenistasEdit);
  res.send(updatedtenistas);

}


const deletetenistasController = (req,res) => {
    const idParam = req.params.id;
  tenistasService.deletetenistasService(idParam);
  res.send({ message: 'Tenista deletado com sucesso!' });

}

module.exports = {
    findAlltenistasController,
    findByIdtenistaController,
    createtenistasController,
    updatetenistasController,
    deletetenistasController,
};

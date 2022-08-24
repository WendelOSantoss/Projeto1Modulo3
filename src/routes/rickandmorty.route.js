const route = require('express').Router();
const controllerrickandmorty = require('../controllers/rickandmorty.controller');



route.get('/characters',controllertenistas.findAlltenistasController);
route.get('/characters/find/',controllertenistas.findByIdtenistaController);
route.post('/characters/create/{id}', controllertenistas.createtenistasController);
route.put('/characters/update/{', controllertenistas.updatetenistasController);
route.delete('/characters/delete/', controllertenistas.deletetenistasController);
 

module.exports = route;

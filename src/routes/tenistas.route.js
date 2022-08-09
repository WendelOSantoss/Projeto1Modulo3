const route = require('express').Router();
const controllertenistas = require('../controllers/tenistas.controller');



route.get('/10-tenistas',controllertenistas.findAlltenistasController);
route.get('/tenista/:id',controllertenistas.findByIdtenistaController);
route.post('/create', controllertenistas.createtenistasController);
route.put('/update/:id', controllertenistas.updatetenistasController);
route.delete('/delete/:id', controllertenistas.deletetenistasController);
 

module.exports = route;

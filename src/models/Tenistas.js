const mongoose = require("mongoose");
const tenistasSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  país: {
    type: String,
    required: true,
  },
  idade: {
    type: Number,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  foto: {
    type: String,
    required: true,
  },
  ranking: {
    type: Number,
    required: true,
  },
  titulos: {
    type: Number,
    required: true,
  },
  grandslam: {
    type: Number,
    required: true,
  },
});


const tenistas = mongoose.model('tenistas',tenistasSchema);

module.exports= tenistas;

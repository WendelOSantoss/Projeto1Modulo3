const tenistas = require('../models/Tenistas');
const Tenistas = require('../models/Tenistas')

  const findAlltenistasService = async () => {
    const tenistas = await Tenistas.find();
    return tenistas;
  };


const findByIdtenistaService = async (parametro_id) => {
    const tenistas = await Tenistas.findById(parametro_id); 
    return tenistas; 
};

const createtenistasService = async (newtenistas) => {
    const tenistasCreated = await Tenistas.create(newtenistas)
    return tenistasCreated;

} ;


const updatetenistasService = async (id, tenistasEdited) => {
  const paletaupdate = await Tenistas.findByIdAndUpdate(id,tenistasEdited)
  return paletaupdate;

};


const deletetenistasService = async (id) => {
   return await Tenistas.findByIdAndDelete(id);
};


module.exports = {
    findAlltenistasService,
    findByIdtenistaService,
    createtenistasService,
    updatetenistasService,
    deletetenistasService,
}

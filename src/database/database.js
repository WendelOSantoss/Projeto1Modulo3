const mongoose = require("mongoose");

const connectToDatabase = () => {
  mongoose.connect(`mongodb://localhost:27017/tenistas-db`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB conectado!"))
    .catch((error) =>
      console.log(`Erro ao conectar com o MONGODB, erro: ${error}`)
    );
};

module.exports = connectToDatabase;

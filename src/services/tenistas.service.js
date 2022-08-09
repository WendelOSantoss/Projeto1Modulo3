const tenistas = [
    {
      id: 1,
      nome: "Daniil Sergeyevich Medvedev",
      país: "Rússia",
      idade: "26 anos",
      descricao:
        "Campeão do Masters de Cincinnati aos 23 anos, Medvedev é um dos principais nomes da nova geração.",
      foto: ".assets image medvdev.jpg",
      ranking: "1",
      titulos: "13",
      grandslam: "1",
    },
    {
      id: 2,
      nome: "Alexander Zverev",
      país: "Alemanha",
      idade: "25 anos",
      descricao:
        "Considerado uma das principais promessas da nova geração, Alexander Zverev impressiona pelo talento e o perfil atlético",
      foto: ".assets image zverev.jpg",
      ranking: "2",
      titulos: "19",
      grandslam: "0",
    },
    {
      id: 3,
      nome: "Rafael Nadal Parera",
      país: "Espanha",
      idade: "36 anos",
      descricao:
        "Conhecido mundialmente por sua força de esquerda e por sua rivalidade com Federer, o rei do saibro tem sido um marco para a história do esporte espanhol e do mundo.",
      foto: ".assets image nadal.jpg",
      ranking: "3",
      titulos: "92",
      grandslam: "22",
    },
    {
      id: 4,
      nome: "Carlos Alcaraz Garfia",
      país: "Espanha",
      idade: "19 anos",
      descricao:
        "Treinado pelo ex-tenista Juan Carlos Ferrero, é considerado uma das grandes promessas do tênis",
      foto: ".assets image Alcaraz.jpg",
      ranking: "4",
      titulos: "5",
      grandslam: "0",
    },
    {
      id: 5,
      nome: "Stefanos Tsitsipas",
      país: "Grécia",
      idade: "23 anos",
      descricao:
        "Carismático e talentoso, jovem grego é visto por muitos como estrela em ascensão no tênis mundial",
      foto: ".assetsimage\tsitsipas.jpg",
      ranking: "5",
      titulos: "9",
      grandslam: "0",
    },
    {
      id: 6,
      nome: "Novak Djokovic",
      país: "Sérvia",
      idade: "35 anos",
      descricao:
        "Tenista sérvio com 15 títulos de Grand Slam, incluindo 7 troféus de campeão do Australian Open.",
      foto: ".assetsimagedjokovic.jpg",
      ranking: "6",
      titulos: "88",
      grandslam: "21",
    },
    {
      id: 7,
      nome: "Casper Ruud",
      país: "Espanha",
      idade: "23 anos",
      descricao:
        "Conseguiu sua primeira vitória nas ATP NextGen Finals em Novembro de 2019.",
      foto: ".assetsimage\ruud.jpg",
      ranking: "7",
      titulos: "8",
      grandslam: "0",
    },
    {
      id: 8,
      nome: "Andrey Andreyevich Rublev",
      país: "Rússia",
      idade: "24 anos",
      descricao:
        "Rublev foi número um do mundo no ranking juvenil. Ele fez uma grande temporada como juvenil em 2014, incluindo o título do Aberto da França e as quartas do Australian Open e do US Open",
      foto: ".assetsimage\rublev.jpg",
      ranking: "8",
      titulos: "11",
      grandslam: "0",
    },
    {
      id: 9,
      nome: "Felix Auger-Aliassime",
      país: "Canadá",
      idade: "21 anos",
      descricao:
        "Félix Auger-Aliassime ganhou em 2015 o título juvenil de duplas do US Open de tênis com o compatriota Denis Shapovalov. Já em julho de 2015, com apenas 14 anos, ele se tornou o mais jovem jogador a quebrar o Top 800 no ranking da ATP ao alcançar o N°. 749 mundial.",
      foto: ".assetsimage\felix.jpg",
      ranking: "9",
      titulos: "1",
      grandslam: "0",
    },
    {
      id: 10,
      nome: "Jannik Sinner",
      país: "Itália",
      idade: "20 anos",
      descricao:
        "Quando Sinner começou a priorizar o tênis aos treze anos, ele foi treinado por Riccardo Piatti, que também foi treinador de meio período de Novak Djokovic e Milos Raonic.",
      foto: ".assetsimageSinner.jpg",
      ranking: "10",
      titulos: "5",
      grandslam: "0",
    },
  ];


  const findAlltenistasService = () => {
    return tenistas;
  };


const findByIdtenistaService = (parametro_id) => {
    return  tenista =  tenistas.find((tenista) => tenista.id === parametro_id);  
};

const createtenistasService = (newtenistas) => {
    const newId = tenistas.length + 1;
    newtenistas.id = newId;
    tenistas.push(newtenistas);
    return newtenistas;

} ;


const updatetenistasService = (id, tenistasEdited) => {
    tenistasEdited['id'] = id;
  const tenistasIndex = tenistas.findIndex((tenistas) => tenistas.id == id);
  tenistas[tenistasIndex] = tenistasEdited;
  return tenistasEdited;

};


const deletetenistasService = (id) => {
    const tenistasIndex = tenistas.findIndex((tenistas) => tenistas.id == id);
    return tenistas.splice(tenistasIndex, 1);
};


module.exports = {
    findAlltenistasService,
    findByIdtenistaService,
    createtenistasService,
    updatetenistasService,
    deletetenistasService,
}

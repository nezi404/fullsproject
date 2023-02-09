const express = require("express");
const {MongoClient} = require("mongodb");
const URL_DO_DB = "mongodb+srv://admin:C4dqiihlUXHYT7cc@cluster0.03neohq.mongodb.net";
const NOME_DO_DB = "banco-de-dados-de-passaros";
const collection = URL_DO_DB.collection

async function main(){

//conectar ao bd, o mongo
console.log("Comecando a se conctar com o banco de dados");
const client = await MongoClient.connect(URL_DO_DB);
console.log("Conectado com o banco de dados");

const app = express();

// O que vier no body da requisição, está em JSON
app.use(express.json());

// Endpoint / -> Hello World
app.get("/", function (req, res) {
  res.send("Hello World");
});

// Endpoint /oi -> Olá, mundo!
app.get("/oi", function (req, res) {
  res.send("Olá, mundo!");
});

// Lista de informações
const passaros = ["bem-te-vi", "sabiá", "cambacica"];
//              0               1              2

// CRUD -> Lista de informações

// Endpoint Read All -> [GET] /item
app.get("/passaro", async function (req, res) {
  const documentos = await collection.find().toArray();
  res.send(itens);
});

// Endpoint Read Single by ID -> [GET] /item/:id
app.get("/passaro/:id", function (req, res) {
  const id = req.params.id;
  const passaro = passaros[id - 1];
  res.send(passaro);
});

// Endpoint Create -> [POST] /item
app.post("/passaro", function (req, res) {
  // console.log(req.body);
  const passaro = req.body;
  passaros.push(passaro.nome);
  res.send("Item criado com sucesso!");
});


app.listen(3000);
}

main();
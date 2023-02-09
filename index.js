const express = require("express");
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
app.get("/passaro", function (req, res) {
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
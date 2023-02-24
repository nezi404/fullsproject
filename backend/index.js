const express = require("express");
const res = require("express/lib/response");
const {MongoClient, ObjectId} = require("mongodb");
const cors = require("cors")


//const URL_DO_DB = "mongodb+srv://admin:C4dqiihlUXHYT7cc@cluster0.03neohq.mongodb.net";
const URL_DO_DB = "mongodb+srv://admin:ljL2rpO6CRWEsgm6@cluster0.vkzer9n.mongodb.net";
const NOME_DO_DB = "bird_db";
const collection = URL_DO_DB.collection

async function main(){

//conectar ao bd, o mongo
console.log("Comecando a se conctar com o banco de dados");
const client = await MongoClient.connect(URL_DO_DB);
const db  = client.db(NOME_DO_DB);
const collection = db.collection("bird");
console.log("Conectado com o banco de dados");

const app = express();

// O que vier no body da requisição, está em JSON
app.use(express.json());
const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 

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
app.get("/passaros", async function (req, res) {
  const documentos = await collection.find().toArray();
  res.send(documentos);
});

class Teste {
  constructor() {}

}
// Endpoint Read Single by ID -> [GET] /item/:id
// achar oq vem dps o endpoint
app.get("/passaros/:id", async function (req, res) {
  const id = req.params.id;
  const passaro = await collection.findOne({ _id: new ObjectId(id) });
  res.send(passaro);
});

// Endpoint Create -> [POST] /item
app.post("/passaros", async function (req, res) {
  // console.log(req.body);
  const passaro = req.body;
  await collection.insertOne(passaro);
  res.send("Item criado com sucesso!");
});
//endpoint update -. PUT item/:id
app.put("/passaros/:id", function (req, res) {
  const id = req.params.id;
  const body = req.body;
  console.log(id, body);

  collection.updateOne({_id: new ObjectId(id)}, {$set: body});

  res.send("FUNcionaa");
  res.send(body)
});

// endpoint delete -. [DELETE] /bird/:id
app.delete("/passaros/:id", async function (req, res) {
  const id = req.params.id;

  await collection.deleteOne({ _id: new ObjectId(id) });

  res.send("Delete by ID: " + id); 
  res.send("Resgistro removido com sucesso !");
});

const port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log("Servidor rodando na porta " + port);

});
}

main();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const People = require('./models/people');

const app = express();

// Conectar ao banco de forma Cloud:
//mongoose.connect('mongodb://<bllackdev>:<blackdb>@ds062448.mlab.com:');
mongoose.connect('mongodb+srv://bllackdev:bllackdb@secret-friend-api.c34sw.azure.mongodb.net/secret-friend-api?retryWrites=true&w=majority', {
  useNewUrlParser: true, // Adicionado por causa da versão do mongoose
  useUnifiedTopology: true, // Adicionado por causa da versão do mongoose
  useCreateIndex: true // Adicionado por causa da versão do mongoose
});
//mongoose.connect("mongodb+srv://secret-friend-api.c34sw.azure.mongodb.net/secret-friend-api"); //--username bllackdev

// Conectar ao banco de forma Local:
/*mongoose.connect('mongodb://localhost/secret-friend-api', {
  useNewUrlParser: true, // Adicionado por causa da versão do mongoose
  useUnifiedTopology: true, // Adicionado por causa da versão do mongoose
  useCreateIndex: true // Adicionado por causa da versão do mongoose
});*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3005);

// Rotas da API
const router = express.Router();

router.use(function (req, res, next) {
  console.log('Algo está acontecendo aqui ...');
  next();
});

router.get('/', function (req, res) {
  res.json({ message: 'Bem vindo ao Secret Friend!!!' });
});

// Rota POST para Inserir 
router.route('/peoples')
  .post(function (req, res) {
    const people = new People();

    people.name = req.body.name;
    people.email = req.body.email;
    people.friend = req.body.friend;

    people.save(function (err) {
      if (err)
        res.send('Erro ao tentar inserir o Amigo(a): ' + err);

      res.json({ message: 'Amigo(a) inserido com Sucesso!' });
    });
  })

  //Rota GET para exibir todos Cadatrados
  .get(function (req, res) {
    People.find(function (err, people) {
      if (err)
        res.send('Erro ao exibir todos os Amigos(as)' + err);

      res.json(people);
    });
  });

//Rota GET para exibir por Id
router.route('/peoples/:people_id')
  .get(function (req, res) {
    People.findById(req.params.people_id, function (err, people) {
      if (err)
        res.send('Id do Amigo(a) nao encontrado: ' + err);

      res.json(people);
    });
  })

  //Rota PUT para atualizar por Id
  .put(function (req, res) {
    People.findById(req.params.people_id, function (err, people) {
      if (err)
        res.send('Id do Amigo(a) nao encontrado: ' + err);

      people.name = req.body.name;
      people.email = req.body.email;
      people.friend = req.body.friend;

      people.save(function (err) {
        if (err)
          res.send('Erro ao atualizar o cadastro do Amigo(a): ' + err);

        res.json({ message: 'Amigo Atualizado!' });
      });
    });
  })

  //Rota DELETE para excluir por Id
  .delete(function (req, res) {
    People.remove({
      _id: req.params.people_id
    }, function (err) {
      if (err)
        res.send('Id do Amigo(a) nao encontrado: ' + err);

      res.json({ message: 'Amigo excluído com Sucesso!' });
    });
  });

app.use('/api', router);


console.log('Iniciando a aplicação na ' + 3005);
const express = require('express');
const mongoose =  require('mongoose');
const routes =  require('./routes');

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-mg96f.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();
//todas as rotas de app vao entender JSON
app.use(express.json());
app.use(routes);
//get: buscando uma informação. ex: listar produtos
//post: quando vai criar uma informação. ex: cadastras produto
//put: editar alguma informação.
//delete



app.listen(3333);
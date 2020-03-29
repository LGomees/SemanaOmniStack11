const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors(
    //origin: colocar url de acesso à aplicação
));
app.use(express.json()); //Antes de todas as requisições, fala para converter a requisição para JSON para conseguir entender
app.use(routes);


app.listen(3333);  
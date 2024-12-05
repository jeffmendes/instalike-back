// Importar o framework Express e a função de conexão ao banco de dados
import express from 'express';
import routes from './src/routes/postsRoutes.js';
import { postarNovoPost } from './src/controllers/postscontroller.js';

// Criar uma aplicação Express
const app = express();

routes(app);

// Iniciar o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor escutando. . .');
});
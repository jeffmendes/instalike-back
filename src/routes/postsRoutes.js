import express from 'express';
import multer from 'multer';
import { listarPosts, postarNovoPost, uploadImagem } from '../controllers/postscontroller.js';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})
//const upload = multer({dest:'./uploads'})

const routes = (app) => {
    // Habilitar o middleware JSON para permitir que a aplicação processe dados no formato JSON
    app.use(express.json());
    // Rota GET para obter todos os posts
    // Quando uma requisição GET for feita para a rota '/posts', esta função será executada
    app.get('/posts', listarPosts);
    app.post('/posts', postarNovoPost)
    app.post('/upload', upload.single('imagem'), uploadImagem)
}

export default routes;

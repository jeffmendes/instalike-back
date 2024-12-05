import { getTodosOsPosts, criarPost } from "../models/postsmodel.js";
import fs from 'fs';

export async function listarPosts(req, res) {
    // Chamar a função para obter todos os posts e armazenar o resultado em 'posts'
    const posts = await getTodosOsPosts();
    // Enviar uma resposta HTTP com status 200 (sucesso) e o array de posts no formato JSON
    res.status(200).json(posts);
}

export async function postarNovoPost(req, res) {
    const novoPost = req.body;
    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    }
    catch (erro) {
        console.error(erro.message);
        res.status(500).json({ 'Erro': 'Fallha na requisição' })
    }
}

export async function uploadImagem(req, res) {
    const novoPost = {
        descricao: '',
        imgUrl: req.file.originalname,
        imgAlt: '',
    };

    try {
        const postCriado = await criarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
        fs.renameSync(req.file.path, imagemAtualizada)
        res.status(200).json(postCriado);
    }
    catch (erro) {
        console.error(erro.message);
        res.status(500).json({ 'Erro': 'Fallha na requisição' })
    }
}
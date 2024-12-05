import conectarAoBanco from "../config/dbConfig.js";
import { postarNovoPost } from "../controllers/postscontroller.js";


// Estabelecer conexão com o banco de dados MongoDB usando a função importada e a string de conexão
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts de um banco de dados específico
export async function getTodosOsPosts() {
    // Selecionar o banco de dados 'imersao-instabyte' a partir da conexão estabelecida
    const db = conexao.db('imersao-instabyte');
    // Selecionar a coleção 'posts' dentro do banco de dados
    const colecao = db.collection('posts');
    // Executar uma consulta para encontrar todos os documentos (posts) na coleção
    // e retornar os resultados como um array
    return colecao.find().toArray();
}

export async function criarPost(novoPost) {
    const db = conexao.db('imersao-instabyte');
    const colecao = db.collection('posts');
    return colecao.insertOne(novoPost);
}
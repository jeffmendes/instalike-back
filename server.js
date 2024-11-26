import express from 'express';

const posts = [
    {
        id: 1,
        descricao: 'Uma foto teste',
        imagem: 'https://placecats.com/millie/300/150',
    },
    {
        id: 2,
        descricao: 'Paisagem montanhosa',
        imagem: 'https://source.unsplash.com/random/300x150/?mountains',
    },
    {
        id: 3,
        descricao: 'Cachorro brincando no parque',
        imagem: 'https://source.unsplash.com/random/300x150/?dog,park',
    },
    {
        id: 4,
        descricao: 'Comida deliciosa',
        imagem: 'https://source.unsplash.com/random/300x150/?food',
    },
    {
        id: 5,
        descricao: 'Cidade à noite',
        imagem: 'https://source.unsplash.com/random/300x150/?city,night',
    },
    {
        id: 6,
        descricao: 'Gato dormindo em uma caixa',
        imagem: 'https://source.unsplash.com/random/300x150/?cat,box',
    }
];

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Servidor escutando :]');
});

app.get('/posts', (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorid(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get('/posts/:id', (req, res) => {
    const index = buscarPostPorid(req.params.id)
    res.status(200).json(posts[index]);
});
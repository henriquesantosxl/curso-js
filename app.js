import express, { json } from 'express';
const app = express();
app.use(json());

//"tabela" de posts
let posts = [
    {
        id:1, owner: 'henriquecds', content: 'primeiro post'}

];

//rota de teste
app.get('/', (req, res) => {
    res.send('API de Estudos Rodando');
});

//rotas do CRUD 
//READ
app.get('/posts', (req, res)=> {
    res.json(posts);
});

//CREATE

app.post('/posts', (req, res)=> {
    const novoPost = {
        id: posts.length + 1,
        owner: req.body.owner,
        content: req.body.content
    };
    posts.push(novoPost);
    res.status(201).json(novoPost);
});

//UPDATE
app.put('/posts/:id', (req, res)=> {
    const { id } = req.params;
    const post = posts.find( p=>p.id === Number(id));
    if(post){
        post.content= req.body.content;
        return res.json(post);
    }
    res.status(404).json({mensagem: 'post não encontrado'});
});

//DALETE
app.delete('/posts/:id', (req, res)=> {
    const { id } = req.params;
    posts = posts.filter(p=>p.id !== Number(id));
    res.status(204).send();
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:${port}`);
});
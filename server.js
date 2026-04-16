import app from './app.js';
const PORT = 2008;

//rota do servidor
app.listen(PORT, () => {
    console.log(`servidor rodando em http://localhost:${PORT}`);
});

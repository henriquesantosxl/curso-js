// CRUD BÁSICO
const redeSocial = {
    usuarios: [
        {
            usarname: 'henriquecdsxl',
        }
    ],
        posts: [
            {
                id: 1,
                owner: 'henriquecdsxl',
                content: 'minha primeira postagem'
            }
        ],
};
// create
function criapost(dados){
    redeSocial.posts.push({
        id:redeSocial.posts.length + 1,
        owner: dados.owner,
        content: dados.content
    });
}
criapost({owner: 'henriquecdsxl', content: 'segunda postagem'});
criapost({owner: 'henriquecdsxl', content: 'terceira postagem'});
console.log(redeSocial.posts)
//read
function pegaPosts () {
    return redeSocial.posts;
}
console.log(pegaPosts())
//update
function atualizaContentDoPost(id, novoconteudo) {
   const postQueVaiSerAtualizado = pegaPosts().find((post)=> {
        return post.id === id;
    })
    console.log(postQueVaiSerAtualizado)
    postQueVaiSerAtualizado.content = novoconteudo

}
atualizaContentDoPost(1,'novo conteúdo do post')
console.log(pegaPosts())
//dalete
function apagaPosts(id){
   const postsAtualizados = pegaPosts().filter((postAtual) => {
    return postAtual.id !== id;
   })
   redeSocial.posts = postsAtualizados
}
apagaPosts(1);
apagaPosts(2);
apagaPosts(3);
console.log(pegaPosts());
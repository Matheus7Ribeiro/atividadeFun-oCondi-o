// exibir frase
function exibeFrase(frase) {
    console.log('Frase do dia: '+ frase)
}
exibeFrase('Seja feliz')


// exibir nome por parametro
function mostrarNome(nome) {
    console.log('Meu nome é '+ nome);

}
mostrarNome('matheus')


// exibir nome, idade, estilo musical
function exibirInfos(exNome, exIdade, exEstilo ) {
    console.log('Nome: '+ exNome +' ,Idade: '+ exIdade +' ,Estilo Musical: '+ exEstilo)
}
exibirInfos ('Matheus', '23', 'Lo-Fi')


// exibir filme, musica
function exibirFilmeEMusica(exFilme, exMusica ) {
    console.log('Filme preferido: '+ exFilme +' ,Música preferida: '+exMusica)
}
exibirFilmeEMusica ('Não tenho preferido', 'Sempre muda kkkk')


// triplicar numero
function triplicaNumero(num) {
    return num*3
}
console.log(triplicaNumero(3))
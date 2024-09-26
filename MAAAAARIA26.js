////////////////////////Prática de objetos 
/*1*/
/*const filme = {
    nome:"Branquelas",
    diretor: "Keenen",
    anoLançamento: 2004,
    elenco:["Marlon Wayans", "Shawn Wayans", "Terry Crews", "Anne Dudek","Maitland Ward"], 
    visto: true
}
console.log(filme.nome)
console.log(filme.diretor)
console.log(filme.anoLançamento)
console.log(filme["elenco"])
console.log(filme["visto"])

filme.personagens = ["Marcus", "Kevin", "Latrell", "Tiffany", "Brittany"]
console.log(filme.personagens)
console.log(filme.elenco[0], "-", filme.personagens[0])
console.log(filme.elenco[1], "-", filme.personagens[1])
console.log(filme.elenco[2], "-", filme.personagens[2])
console.log(filme.elenco[3], "-", filme.personagens[3])
console.log(filme.elenco[4], "-", filme.personagens[4])

filme.elenco[0] = "Xuxa"
console.log(filme.elenco)

console.log(filme)*/


/*2*/
const pessoa = {
    nome:"Maria",
    idade: 16,
    gêneroMusical:"Rap"
}
/*console.log("O nome da pessoa é " + (pessoa.nome) + ", ela tem " + (pessoa.idade) + " anos e gosta muito de " + (pessoa.gêneroMusical))*/


function objeto(pessoa) {
const pessoa1 = {
    ...pessoa ,
    comidasFav:["Batata frita", "Ovo", "Lasanha"] , 
mlrAmigo: {
        nomeAmg:"LALALA" ,
        idadeAmg:12 ,
    }
}
console.log("O nome da pessoa é " + pessoa1.nome + " e suas comidas favoritas são " + pessoa1.comidasFav + " e seu melhor amigo se chama " + pessoa1.mlrAmigo.nomeAmg + " e tem " + pessoa1.mlrAmigo.idadeAmg + "anos")

}
objeto(pessoa)


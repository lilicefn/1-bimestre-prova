//arrays ou lista
//declaração de arrays

//             0        1         2          3
let cores = ["Azul","Amarelo","Vermelho", "Verde"]
console.log(cores)

//acessar item da lista
console.log(cores[1])

//propriedade length
console.log(cores.length)
let ultimoElemento = cores[cores.length - 1] //tamanho do array = 4, se subtrair 1 é o ultimo elemento
console.log(ultimoElemento)

//adicionar elementos
const notas = [10,6,8]
//push - adicionar elementos no final do array
notas.push(9)
console.log(notas)

//unshift - adiciona elementos no início do array
notas.unshift(5)
console.log(notas)

//deletando notas do arrays
//pop - deletar o último elemento do array
notas.pop()
console.log(notas)

//shift - deleta o primeiro elemento do array
notas.shift()
console.log(notas)

//método slice
//slice(inicio,fim)
const listaDeEstudantes = ["João","Juliana","Ana","Caio","Lara","Aline","Guilherme",
    "Carlos","Paulo","Renata"]
console.log(listaDeEstudantes)

const sala1 = listaDeEstudantes.slice(0,listaDeEstudantes.length/2) //separa em metade o tamanho da lista 0 - 5
const sala2 = listaDeEstudantes.slice(listaDeEstudantes.length/2)  // começa com a metade da lista 6 - 10
console.log(sala1)
console.log(sala2)

//splice(inicio,quantidade, elemento a ser adicionado). Substitui elementos da lista
sala2.splice(2, 2, "Rodrigo") //índice - começa alteração no 2. O segundo número é a qtde de elemento a ser retirado
console.log(sala2) // em último coloca o que vc quer substituir

//concatenar listas
//concat
const salaJs = ["Evandro", "Camila"]
const salaPython = ["Juliana", "Leonardo", "Raquel" ]

const salasUnidas = salaJs.concat(salaPython)
console.log(salasUnidas)

//lista de listas
const alunos = ["Evandro", "Camila", "Maria", "Gabriel"]
const media = [10, 5, 6, 8]
const lista = [alunos, media]

console.log(`A aluna do índice 1 se chama ${lista[0][1]} e sua média é ${lista[1][1]}`)
// ${lista[0][1]} --> [0] é da lista(alunos) e [1] o lugar na lista alunos
// ${lista[1][1]} --> [0] é da lista(media) e [1] o lugar na lista media

//percorrer listas
console.log(lista)
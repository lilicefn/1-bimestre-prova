//1
function somar(a, b) { 
    return a + b; 
    } 
console.log(somar(5, 3));

//2
function parOuImpar(numero) { 
    return numero % 2 === 0 ? 'Par' : 'Ímpar'; 
    } 
console.log(parOuImpar(4)); // 'Par' 

//3

function metPCentmili(a){
    cent = a*100
    mili = a*1000
    return ` ${a}m é ${cent} cm e ${mili} mm`
};

console.log(metPCentmili(2))

//4
const frutas = ["maçã", "banana"]
frutas.push("uva", "laranja")

console.log(frutas)

//5
const numeros = [1, 2, 3, 4, 5]
ultimoNumero = numeros.pop()
console.log(ultimoNumero)

//6
const cores = ['vermelho', 'azul', 'verde']
primeiraCor = cores.shift()
console.log(primeiraCor)

//7
const animais = ['cachorro', 'gato']
animais.splice(0,2, "elefante", "leão")
console.log(animais)

//8
const numeros2 = [10, 20, 30, 40, 50]
numeros2.splice(0,2, 5,15)
console.log(numeros2)

//9
const letras = ['a', 'b', 'c', 'd', 'e']
const newletras = letras.slice(1,3)
console.log(newletras)

//10
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const arraysunidos = array1.concat(array2)
console.log(arraysunidos)

//11
function saudacao(nome) { 
    console.log(`Olá, ${nome}`)
} 
console.log(saudacao("Carlos")); // "Olá, Carlos!" 
console.log(saudacao("Ana")); // "Olá, Ana!"  

//12
    //O var pode ser declarado fora do bloco(usada em toda a função)
    //O let só pode ser declarado dentro do bloco de código
    //O const é uma constante que o valor não pode ser alterado após declarado

 //13
    // o valor da variável será undefined até que o código atribua um valor

//14
    //O typeof é usado para identificar o tipo da variável como int, float, string, boolena
let nome = "Íris"
let idade = 11
let bool = true
   
console.log(typeof nome)
console.log(typeof idade)
console.log(typeof bool)
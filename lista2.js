//EX1
function concatenaArray(a,b){
    concatena = a.concat(b)
}

const animal = ["Gato", "Cachorro", "Tartaruga", "Coelho"]
const idade = [1, 3, 100, 2]

concatenaArray(animal, idade)
console.log(concatena)

//EX2
const numeros = [1,2,3,4,5,6,7,8,9,10]
console.log(numeros)
const parteNumeros= numeros.slice(3,8)
console.log(parteNumeros)

//EX3
const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']
console.log(frutas)
frutas.splice(2, 2, "Kiwi", "Pêssego")
console.log(frutas)

//EX4
const menuPrincipal = ["Hamburger", "Batata", "Sanduíche","Suco", "Refrigente"]
const menuSobremesa = ["Sorvete", "Bolo"]
const menuCompleto = menuPrincipal.concat(menuSobremesa)
console.log(menuCompleto)

//1
const carro = {
    marca: "Toyota",
    modelo: "Yaris",
    ano: 12,
};
console.log(carro.marca)
console.log(carro.modelo)
console.log(carro.ano)

//2
const usuario = {
    nome: "Fernanda",
    email: "fernanda@email.com",
    idade: 25
};

delete usuario.email
console.log(usuario)

//3
const pessoa = {
    nome: "Carlos",
    idade: 29
};

console.log(pessoa.idade)
pessoa.idade = 31;
console.log(pessoa.idade)

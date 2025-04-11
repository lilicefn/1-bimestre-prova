//Objeto - dentro tem as propriedades como variáveis, booleanas, listas(arrays) e métodos.
const estudante = {
    nome: "Melissa",
    idade: 15,
    prontuario: 12345,
    bolsista: true,
    telefone: ["1234-5678", "8765-4321"],
    endereco: [{
        rua: "Nome da rua",
        numero: "12",
        bairro: "Santa Cruz"
    },
    {
        rua: "Nova rua",
        numero: "200",
        bairro: "nome do bairro"
    }]
}

//verificar se existe a propriedade endereço ( como o try no python)
const chaveObjeto = Object.keys(estudante)
if (!chaveObjeto.includes("endereco")){ //se a propriedade end não existe
    console.error("É necessário ter um endereço cadastrado.")//mensagem de erro
}else{
    console.log("Endereço cadastrado com sucesso.")
}

console.log("",chaveObjeto)

console.log(typeof estudante) //verifica o tipo de dado - object
console.log(estudante)

console.log(estudante.telefone) //para acessar uma propriedade
console.log(estudante.telefone[0]) //retorna o telefone índice 0

console.log(estudante["idade"]) // pode usar esta forma para chamar a propriedade dentro do objeto
console.log(estudante.idade) // igual ao de cima

//adicionar um objeto dentro de outro objeto (o endereço dentro do objeto estudante)
//estudante.endereco = {
    //rua: "Nome da rua",
    //numero: "12",
    //bairro: "Santa Cruz"
//}

console.log(estudante)
console.log(estudante.endereco.rua) //acessa a propriedade dentro do obj endereço que está dentro do estudante


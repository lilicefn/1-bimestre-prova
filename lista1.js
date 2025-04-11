 // EX1
 let nome = "Maysa"
 let idade = 16
 let bool = true

 console.log(typeof nome)
 console.log(typeof idade)
 console.log(typeof bool)

 //EX2
let nota1 = 10
let nota2 = 9
let nota3 = 8

function calculaMedia(a,b,c){
    resultado = a+b+c/3
    if(resultado>=7){
        console.log("Aprovado")
    }else{
        console.log("Reprovado")
    }
}

calculaMedia(nota1,nota2,nota3)

//EX3
let rain = true
function verChuva(a){
  if(a = true){
   console.log("Está chovendo. Leve uma guarda-chuva!!!")
  }else{
    console.log("Não está chovendo.Você não precisa levar guarda-chuva.")
  }
} 
verChuva(rain)

//EX4
let numero1 = 4

function calculaDobro(a){
    let resultado = a * 2
    return resultado
}
calculaDobro()

//EX5
let anos = 16

function verIdade(a){
    if(a>=18){
        console.log("Maior de idade.")
    }else{
        console.log("Menor de idade.")
    }
}
verIdade()

//EX6

function cumprimentar(nome) {
  console.log(`Olá, ${nome}`) //template string, converte tudo em string
}

cumprimentar("Maysa💖✨🎠", 16)
cumprimentar("Gabi💖🎶🎀", 15)
cumprimentar("Melissa🍜💖🎨 ")

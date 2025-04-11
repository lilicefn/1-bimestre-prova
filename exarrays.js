//1
let tarefas = ['Estudar', 'Lavar a louça', 'Fazer exercícios']
tarefas.push('Comprar pão', 'Ler um livro')

//2
let ultimaTarefa = tarefas.pop()

//3
tarefas.unshift('Acordar cedo', 'Tomar café')

//4
let primeiraTarefa = tarefas.shift()

//5
tarefas.splice(0, 2, 'Fazer café da manhã', 'Organizar a mesa')

//6
let tarefasSelecionadas = tarefas.slice(1, 4)

//7
let tarefasCompletas = tarefas.concat(['Ver um filme', 'Descansar'])


console.log("Lista final de tarefas:", tarefasCompletas)
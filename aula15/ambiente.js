// OBJETOS
var amizades = ['amigo', 'amigo1', 'amigo2', 'amigo3', 'amigo4']
let amigo =
{
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p = 0) {
        this.peso += p
    }
}

let amigo1 =
{
    nome: 'João',
    sexo: 'M',
    peso: 74,
    engordar(p = 0) {
        this.peso += p
    }
}
let amigo2 =
{
    nome: 'Clarice',
    sexo: 'F',
    peso: 65.2,
    engordar(p = 0) {
        this.peso += p
    }
}

amigo2.engordar(2)
amigo.engordar(1)
amigo1.engordar(5)

console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
console.log(`${amigo2.nome} pesa ${amigo2.peso}Kg`)
console.log(`${amigo1.nome} pesa ${amigo1.peso}Kg`)
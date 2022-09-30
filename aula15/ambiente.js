// OBJETOS
// const amizades = ['amigo', 'amigo1', 'amigo2', 'amigo3', 'amigo4']
// const amigo =
// {
//     nome: 'José',
//     sexo: 'M',
//     peso: 85.4,
//     engordar(p = 0) {
//         this.peso += p
//     }
// }

// let amigo1 =
// {
//     nome: 'João',
//     sexo: 'M',
//     peso: 74,
//     engordar(p = 0) {
//         this.peso += p
//     }
// }
// let amigo2 =
// {
//     nome: 'Clarice',
//     sexo: 'F',
//     peso: 65.2,
//     engordar(p = 0) {
//         this.peso += p
//     }
// }

// amigo2.engordar(2)
// amigo.engordar(1)
// amigo1.engordar(5)



// console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
// console.log(`${amigo2.nome} pesa ${amigo2.peso}Kg`)
// console.log(`${amigo1.nome} pesa ${amigo1.peso}Kg`)


// amizades.pop()

// console.log(amizades.length)


const amizades =
    [
        {
            nome: 'José',
            sexo: 'M',
            peso: 85.4,
            engordar(p = 0) {
                this.peso += p
            }
        },
        {
            nome: 'João',
            sexo: 'M',
            peso: 74,
            engordar(p = 0) {
                this.peso += p
            }
        },
        {
            nome: 'Clarice',
            sexo: 'F',
            peso: 65.2,
            engordar(p = 0) {
                this.peso += p
            }
        }
    ]
amizades[0].engordar(2)
amizades[1].engordar(2)
amizades[2].engordar(5)
amizades.push(
    {
        nome: 'Pedro',
        sexo: 'M',
        peso: 70,
        engordar(p = 0) {
            this.peso += p
        }
    }
)





console.log(amizades)


console.log(`${amizades[0].nome} pesa ${amizades[0].peso} Kg`)
console.log(`${amizades[1].nome} pesa ${amizades[1].peso} Kg`)
console.log(`${amizades[2].nome} pesa ${amizades[2].peso} Kg`)



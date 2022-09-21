//Array/Vetor//


let num = [5, 1, 2, 3, 9]
// índice: 0  1   2   3  4



console.log(num[4])

num.push(8) // com o "push" o índice [5] foi adicionado

num.sort() // Sorteia a posição dos números

console.log(num[5])

console.log(num.length) //Número de elementos dentro do Array


console.log(num)



console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)



for (let pos in num) {
    console.log(`O índice ${pos} tem o valor ${num[pos]}`)

}


//Array/Vetor//


let num = [5, 10, 20, 3, 9]
// índice: 0  1   2   3  4



console.log(num[4])

num.push(88) // com o "push" o índice [5] foi adicionado

console.log(num[5])

console.log(num.length) //Número de elementos dentro do Array

num.sort() // Sorteia a posição dos números

console.log(num)


console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)



for (let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}


let value = [10, 8, 1, 5, 4, 6]
value.sort()

console.log(value.indexOf(6))
// Mostra a posição do valor indicado

console.log(value.indexOf(9))
// Se der -1 é porque o número indicado não foi encontrado dentro do vetor



//console.log(valores)              Forma não formatada

/*
console.log(valores[0])
console.log(valores[1]) 
console.log(valores[2])             Forma burra
console.log(valores[3])
console.log(valores[4])
...
*/

for (let pos = 0; pos < value.length; pos++) {
    console.log(`A posição (índice) ${pos} tem o valor ${value[pos]}`)
    //                                   Forma prática (1)
}

console.log('----------------------------------')


for (let pos in value) {
    console.log(`A posição (índice) ${pos} tem o valor ${value[pos]}`)
    //                                  Forma prática (2)... Mais indicada, mas não primordial
}
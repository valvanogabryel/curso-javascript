var c = 1 //contador
while (c < 5) {
    console.log(`Passo ${c}`)           //RECOMENDADO
    c++ // c = c + 1
}
// OU
do {
    console.log(`Passo ${c}`)
    c++                                 //USÁVEL
} while (c < 5)


/*console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')                //PÉSSIMO
console.log('Tudo bem?')
console.log('Tudo bem?')
*/

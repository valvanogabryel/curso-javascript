function parimp(n) {
    if (n % 2 == 0) {
        console.log(`O número foi ${n}`)
        return 'Par'.toUpperCase()
    } else {
        console.log(`O número foi ${n}`)
        return 'Impar'.toUpperCase()
    }
}


let res = parimp(Number.parseInt(Math.random() * 11))



console.log(res)
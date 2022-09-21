let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(n) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNum(num.value) && !inLista(num.value, valores)) {
        valores.push(num.value)
        let option = document.createElement('option')
        for (let i = 0; i < valores.length; i++) {
            option.text = 'Valor ' + valores[i] + ' adicionado.'
            lista.add(option)
        }
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
}

function finalizar() {
    let maiorValor = Math.max.apply(null, valores)
    let menorValor = Math.min.apply(null, valores)
    let soma = 0
    for (var i = 0; i < valores.length; i++) {
        soma += valores[i]
    }
    res.innerHTML = `Ao todo temos ${valores.length} números cadastrados. </br>`
    res.innerHTML += `O maior valor informado foi ${maiorValor}. </br>`
    res.innerHTML += `O menor valor informado foi ${menorValor}. </br>`
    res.innerHTML += `Somando todos os valores temos ${soma}.`
}

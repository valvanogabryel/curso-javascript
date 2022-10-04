let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return fale
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

        num.value = ''
        res.innerHTML = ''
        // createOpt
        let option = document.createElement('option')
        for (let i = 0; i < valores.length; i++) {
            option.text = 'Valor ' + valores[i] + ' adicionado.'
            lista.add(option)
        }
        document.getElementById('btn-end').disabled = false
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
}

function finalizar() {
    let maiorValor = Math.max.apply(null, valores)
    let menorValor = Math.min.apply(null, valores)
    let soma = 0
    // calcSoma
    for (let i = 0; i < valores.length; i++) {
        soma += Number.parseInt(valores[i])
    }
    // calcMédia
    for (let i = 0; i < valores.length; i++) {
        var media = soma / valores.length
    }

    res.innerHTML = `<p>Ao todo temos ${valores.length} número(s) cadastrado(s).</p> </br>`
    res.innerHTML += `<p>O maior valor informado foi ${maiorValor}.</p> </br>`
    res.innerHTML += `<p>O menor valor informado foi ${menorValor}.</p> </br>`
    res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p> </br>`
    res.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(1)}</p>`

}
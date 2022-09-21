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
    if (l.indexOf(Number(n)) != -1) {
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
            option.text = valores[i]
            lista.add(option)
        }




    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
}

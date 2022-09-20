function contar() {
    var inicio = Number.parseInt(document.getElementById('inicio').value)
    var fim = Number.parseInt(document.getElementById('fim').value)
    var passo = Number.parseInt(document.getElementById('passo').value)
    var p = passo
    var chegada = document.getElementById('chegada')
    var contagem = document.getElementById('res')


    if (p > 1) {
        for (var c = inicio; c <= fim; c = c + p) {
            document.getElementById('res-title').innerHTML = 'Contagem:'
            contagem.innerHTML += '👉 ' + c

            document.getElementById('chegada').innerHTML = '🏁'
            document.getElementById('btnCont').disabled = true
        }
    } else {
        for (var c = inicio; c <= fim; c++) {
            document.getElementById('res-title').innerHTML = 'Contagem:'
            contagem.innerHTML += '👉 ' + c

            document.getElementById('chegada').innerHTML = '🏁'
            document.getElementById('btnCont').disabled = true
        }
        for (var c = inicio; c >= fim; c = c - p) {
            document.getElementById('res-title').innerHTML = 'Contagem:'
            contagem.innerHTML += '👉 ' + c

            document.getElementById('chegada').innerHTML = '🏁'
            document.getElementById('btnCont').disabled = true
        }
        if (p == 0) {
            alert('Zero é inválido. O valor dos passos passou a ser 1')
            p = 1
        }
    }

    if (c >= 50) {
        var title = document.getElementById('res-title')
        document.body.classList.add('expand')
        title.style.textAlign = 'center'
        title.style.margin = '15px'
        contagem.style.textAlign = 'center'
    }
    if (c >= 200) {
        alert('A contagem é muito alta.')
        contagem.innerHTML = ''
        document.body.classList.remove('expand')
        title.innerHTML = ''
        document.getElementById('btnCont').disabled = true
        document.getElementById('res-title').innerHTML = ''
        contagem.innerHTML = ''
    }

    // if (inicio > fim) {
    //     alert('O número inicial é maior que o final.')
    //     document.getElementById('btnCont').disabled = true
    //     document.getElementById('res-title').innerHTML = ''
    //     contagem.innerHTML = ''
    // }

}









function mudarTema() {
    document.body.classList.toggle('dark')
}

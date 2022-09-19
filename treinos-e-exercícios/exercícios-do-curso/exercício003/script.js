function contar() {
    var inicio = Number.parseInt(document.getElementById('inicio').value)
    var fim = Number.parseInt(document.getElementById('fim').value)
    var passo = Number.parseInt(document.getElementById('passo').value)
    var p = passo
    var chegada = document.getElementById('chegada')
    var contagem = document.getElementById('res')
    document.getElementById('btnCont').disabled = true
    if (p > 1) {
        for (var c = inicio; c <= fim; c = c + p) {
            document.getElementById('res-title').innerHTML = 'Contagem:'
            contagem.innerHTML += '👉 ' + c

            document.getElementById('chegada').innerHTML = '🏁'
        }
    } else {
        for (var c = inicio; c <= fim; c++) {
            document.getElementById('res-title').innerHTML = 'Contagem:'
            contagem.innerHTML += '👉 ' + c + ' '

            document.getElementById('chegada').innerHTML = '🏁'
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
    }

    if (inicio > fim) {
        alert('O número inicial é maior que o final.')
    }

}


function mudarTema() {
    // var light = document.getElementById('sol')
    // var dark = document.getElementById('lua')
    document.body.classList.toggle('dark')

    // light.style.display = 'inline'
    // dark.style.display = 'none'



}

function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<p>Agora são ${hora} horas!</p>`
    if (hora >= 0 && hora < 12) {
        img.src = 'img/foto-manha.png'
        document.body.style.background = '#e1b28f'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'img/foto-tarde.png'
        document.body.style.background = '#9B701B'
    } else {
        img.src = 'img/foto-noite.png'
        document.body.style.background = '#362D4C'
    }
}
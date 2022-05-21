function carregar () {
    var msg = window.document.getElementById('msg')
    var title = window.document.getElementById('title')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = 'Agora são ' + hora + ' horas.'
    if (hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'imagens/Reynaldo-manha.jpg'
        document.body.style.background = '#e0a251'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'imagens/Torsten-tarde.jpg'
        document.body.style.background = '#e0d318ee'
        title.innerHTML = 'Hora da Tarde'
    } else {
        // BOA NOITE!
        img.src = 'imagens/Reynaldo-noite.jpg'
        document.body.style.background = '#535353'
        title.innerHTML = 'Hora da Noite'
    }
}

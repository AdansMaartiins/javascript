function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else  {
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var gênero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
            if (fsex[0].checked) {
                gênero = 'Homem'
                if(idade >=0 && idade <18) {
                      //crinça
                      img.setAttribute('src', 'imagens/foto-crinça-p.jpg')
                } else if (idade <21) {
                    //Jovem
                    img.setAttribute ('src', 'imagens/foto-jovem-p.jpg' )
                } else if (idade <50) {
                    //Adulto
                    img.setAttribute ('src', 'imagens/foto-adulto-p.jpg' )
                } else {
                    //idoso
                    img.setAttribute ('src', 'imagens/foto-idoso-p.jpg' )
                }
              

            } else if (fsex[1].checked) {
                gênero = 'Mulher'
                if(idade >=0 && idade <18) {
                    //crinça
              } else if (idade <21) {
                  //Jovem
              } else if (idade <50) {
                  //Adulto
              } else {
                  //idoso 
              }
            }
            res.style.textAlign = 'center'
            res.innerHTML = 'Dectectamos ' + gênero + ' com ' + idade + ' anos.'
            res.appendChild(img)
        }

    }        
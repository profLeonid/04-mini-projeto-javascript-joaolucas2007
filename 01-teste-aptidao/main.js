'use strict'

const avaliar = document.getElementById ('avaliar')          //cria uma variavel avaliar e chama o id do botão avaliar//

avaliar.addEventListener('click', function (){    //adiciona um evento ao clicar no bo~toa avaliar
  const tempo = document.getElementById('tempo').value //chama o botão id tempo
  const resultado = document.getElementById('resultado')//chama o id resultado
  if (tempo < 14){
    resultado.textContent = 'apto'                       //cria uma condião se e senao
    resultado.style.color = '#14532d'
  } else{
    resultado.textContent = 'não apto'
    resultado.style.color = '#7f1d1d'
  }
})
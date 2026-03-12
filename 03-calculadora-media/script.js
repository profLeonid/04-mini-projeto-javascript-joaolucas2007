'use strict'

function calcularMedia(){

    const nota1 = Number(document.getElementById('nota1').value)
    const nota2 = Number(document.getElementById('nota2').value)
    const nota3 = Number(document.getElementById('nota3').value)

    const resultado = document.getElementById('resultado')

    const media = (nota1 + nota2 + nota3) / 3

    if (media >= 7){
        resultado.textContent = `Média: ${media.toFixed(2)} - Aprovado`
        resultado.style.color = '#14532d'
    }
    else if (media >= 5){
        resultado.textContent = `Média: ${media.toFixed(2)} - Recuperação`
        resultado.style.color = '#713f12'
    }
    else{
        resultado.textContent = `Média: ${media.toFixed(2)} - Reprovado`
        resultado.style.color = '#7f1d1d'
    }

}
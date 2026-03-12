'use strict'

function CalcularDesconto (){
    const preco = document.getElementById('preco').value
    const desconto = document.getElementById('desconto')
    const resultado = document.getElementById('resultado')

    const economia = preco * desconto / 100
    resultado = preco - economia

        resultado.textContent = `Você economizou R$ ${economia.toFixed(2)}. Preço final: R$ ${final.toFixed(2)}`

           if (desconto <= 5){
        resultado.style.color = '#14532d'
    } 
    else if (desconto <= 10){
        resultado.style.color = '#713f12'
    } 
    else{
        resultado.style.color = '#7f1d1d'
    }

}
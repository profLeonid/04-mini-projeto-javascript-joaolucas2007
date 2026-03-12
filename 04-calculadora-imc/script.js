'use strict'

function calcularIMC(){

  const nome = document.getElementById('nome').value
  const altura = Number(document.getElementById('altura').value)
  const peso = Number(document.getElementById('peso').value)

  const resultado = document.getElementById('resultado')

  const imc = peso / (altura * altura)

  if(imc < 18.5){
    resultado.textContent = `${nome}, seu IMC é ${imc.toFixed(2)} - Abaixo do peso`
    resultado.style.color = '#1e3a5f'
  }
  else if(imc < 25){
    resultado.textContent = `${nome}, seu IMC é ${imc.toFixed(2)} - Peso normal`
    resultado.style.color = '#14532d'
  }
  else if(imc < 30){
    resultado.textContent = `${nome}, seu IMC é ${imc.toFixed(2)} - Sobrepeso`
    resultado.style.color = '#713f12'
  }
  else if(imc < 35){
    resultado.textContent = `${nome}, seu IMC é ${imc.toFixed(2)} - Obesidade grau I`
    resultado.style.color = '#7f1d1d'
  }
  else if(imc < 40){
    resultado.textContent = `${nome}, seu IMC é ${imc.toFixed(2)} - Obesidade grau II`
    resultado.style.color = '#6b0f0f'
  }
  else{
    resultado.textContent = `${nome}, seu IMC é ${imc.toFixed(2)} - Obesidade grau III`
    resultado.style.color = '#450a0a'
  }

}
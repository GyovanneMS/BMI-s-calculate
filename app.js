'use strict'

function mostrarResultado() {

    const nome = document.getElementById('nome').value
    const altura = parseFloat(document.getElementById('altura').value)
    const peso = parseFloat(document.getElementById('peso').value)
    const imcForm = document.getElementById('imc-form')
    const resultado = document.getElementById('result')

    console.log(imcForm.reportValidity())

    if(imcForm.reportValidity){
        const valorImc = (peso/altura ** 2);
        let classificacao;


        if(valorImc < 18.5){
            classificacao = 'Desnutrido, vá a casa da sua vó.'
        } else if(valorImc < 25){
            classificacao = '"Parabáis", não faz mais que sua obrigação, está no peso ideal. <span class="verde"> Parabens</span>'
        } else if(valorImc < 30){
            classificacao = 'Você é um dos meus, um pouco acima do peso.'
        } else if(valorImc < 35){
            classificacao = 'Obesidade nivel I, faça uma dieta.'
        } else if(valorImc < 40){
            classificacao = 'Obesidade nivel II, vá a um médico.'
        } else{
            classificacao = 'Obesidade nível III, vá ao programa "Quilos mortaiss". <span class="vermelho"> Perigo, perigo </span>'
        }

        resultado.innerHTML = `${nome} seu IMC é ${valorImc.toFixed(2)}. ${classificacao}`
    }


}

document.getElementById('calcular').addEventListener('click', mostrarResultado);
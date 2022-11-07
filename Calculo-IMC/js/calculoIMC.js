function calcular() {
    let nome = document.getElementById('nome').value;
    let alturaEmM = document.getElementById('altura');
    let peso = document.getElementById('peso');
    let imc;
    let Resultado = document.querySelector('.resultado');
    let p = Number(peso.value)
    let a = Number(alturaEmM.value)
    imc = p / (a * 2)
    imc = imc.toFixed(2)
    if (nome == " ") {
        alert('[ERRO], valores inseridos inválidos')
    } else if (a == " ") {
        alert('[ERRO], valores inseridos inválidos')
    } else if (p == " ") {
        alert('[ERRO], valores inseridos inválidos')
    } else {
        Resultado.innerHTML = ''
        Resultado.innerHTML += ` ${nome} tem o IMC é de ${imc}`
        if (imc <= 18.5) {
            Resultado.innerHTML += `<p> A classificação do seu IMC é de magreza, obesidade grau 0 </p>`
        } else if (imc > 18.5 && imc <= 24.9) {
            Resultado.innerHTML += `<p> A classificação do seu Imc é normal, obesidade grau 0 </p>`
        } else if (imc > 25 && imc <= 29.9) {
            Resultado.innerHTML += `<p> A classificação do seu IMC é de sobrepeso, obesidade grau 1 </p>`
        } else if (imc > 30 && imc <= 39.9) {
            Resultado.innerHTML += `<p> A classificação do seu IMC é de obesidade, obesidade grau 2 </p>`
        } else {
            Resultado.innerHTML += `<p> A clissificação do seu IMC é de obesidade grave, obesidade grau 3 </p>`
        }
    }
}
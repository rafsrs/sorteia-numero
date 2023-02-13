function verificaChuteValido(chute) {
    const numero = chute

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
    } else if (numeroForaDoPermitido(numero)) {
        elementoChute.innerHTML = `<div>Valor inválido: o número PRECISA estar entre ${menorValor} e ${maiorValor}.</div>`
    } else if (numero == numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você Acertou!</h2>
            <h3>O número secreto era <span class="box acertou">${numeroSecreto}</span></h3>

            <button class="botao">Jogar Novamente</div>
        `
        const jogarDeNovo = document.querySelector('.botao')
        jogarDeNovo.addEventListener('click', () => {
            return window.location.reload()
        })
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
}

function numeroForaDoPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}





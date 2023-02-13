let menorValor = 1
let maiorValor = 500

const elementoChute = document.getElementById('chute')

let numeroSecreto = gerarNumeroAleatorio()



function gerarNumeroAleatorio() {
    let n = -1
    while (n < menorValor) {
        n = parseInt(Math.random() * maiorValor + 1)
    }
    return n
}

console.log('Número Secreto: ', numeroSecreto)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor
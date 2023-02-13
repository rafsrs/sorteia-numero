const seletor_dificuldade = document.querySelectorAll('[data-dificuldade]')

const dificuldades = {
    'muito-facil': {
        'min': 1,
        'max': 50 
    },
    'facil': {
        'min': 1,
        'max': 100
    },
    'normal': {
        'min': 1,
         'max': 500
    },
    'dificil': {
        'min': 1,
        'max': 1000
    },
    'muito-dificil': {
        'min': 1,
        'max': 10000
    },
}


seletor_dificuldade.forEach( (elemento) => {
    elemento.parentElement.addEventListener('click', () => {
        const dificuldade = elemento.dataset.dificuldade

        elemento.click()

        menorValor = dificuldades[dificuldade].min
        maiorValor = dificuldades[dificuldade].max

        numeroSecreto = gerarNumeroAleatorio()
        
        elementoMenorValor.innerHTML = menorValor
        elementoMaiorValor.innerHTML = maiorValor

        elementoChute.innerHTML = ''
    })
})
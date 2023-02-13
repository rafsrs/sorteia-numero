window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition

const recognition = new SpeechRecognition()
recognition.lang = "pt-Br"
recognition.start()

recognition.addEventListener('result', function onSpeak(e) {
    let chute = e.results[0][0].transcript
    chute = transformaNumero(chute)

    exibeChuteNaTela(chute)
    verificaChuteValido(chute)
})

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse: </div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())


function transformaNumero(numero) {
    if (/\D/g) {
        const regexp = /\D/g
        let n = numero.replace(regexp, '')
        n = +n
        return n
    } else {
        let n = +numero
        return n
    }
}


const numeroCapitulos = 10;

const nomeCapitulo = document.getElementById('capitulo')

const botaoPlayPause = document.getElementById('play-pause')
const botaoProximo = document.getElementById('proximo')
const botaoAnterior = document.getElementById('anterior')
const audioCapitulo = document.getElementById('audio-capitulo')

let capituloAtual = 1;

let itsPlaying = false;

function tocarFaixa(){
    audioCapitulo.play()
    botaoPlayPause.classList.remove('bi-play-circle-fill')
    botaoPlayPause.classList.add('bi-pause-circle-fill')
}

function pausarFaixa(){
    audioCapitulo.pause()
    botaoPlayPause.classList.remove('bi-pause-circle-fill')
    botaoPlayPause.classList.add('bi-play-circle-fill')
}

function tocarOuPausar(){
    if (!itsPlaying){
        tocarFaixa();
        itsPlaying = true
    }
    else {
        pausarFaixa();
        itsPlaying = false
    }
    
}

function proximaFaixa(){
    if(capituloAtual === 10){
        capituloAtual = 1;
    }else{
        capituloAtual += 1
    }

    audioCapitulo.src = `./books/dom-casmurro/${capituloAtual}.mp3`
    tocarFaixa()
    itsPlaying = true

    trocarNomeFaixa()
}

function anteriorFaixa(){
    if(capituloAtual === 1){
        capituloAtual = 10;
    }else{
        capituloAtual -= 1
    }

    audioCapitulo.src = `./books/dom-casmurro/${capituloAtual}.mp3`
    tocarFaixa()
    itsPlaying = true

    trocarNomeFaixa()


}

function trocarNomeFaixa(){
    nomeCapitulo.innerText = 'Capítulo ' + capituloAtual
}

botaoAnterior.addEventListener('click', anteriorFaixa)
botaoProximo.addEventListener('click', proximaFaixa)
botaoPlayPause.addEventListener('click',tocarOuPausar)
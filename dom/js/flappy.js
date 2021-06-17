/* função para criar novo elemento html e uma class*/
function novoElemento(tagName, className) {
    /* criando uma tag html */
    const elem = document.createElement(tagName)
    /* criando uma class */
    elem.className = className
    return elem
}

/* criando uma barreira */
/* função construtora */
function Barreira(reversa = false) {
    /* criando a tag div com a class barreira */
    this.elemento = novoElemento('div', 'barreira')

    /* criando a borda do cano */
    const borda = novoElemento('div', 'borda')
    /* criando o cano */
    const corpo = novoElemento('div', 'corpo')

    /* juntando o corpo e a borda do cano */
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    /* definindo a altura do corpo do cano */
    this.setAltura = altura => corpo.style.height = `${altura}px`
}

/* const b = new Barreira(true)
b.setAltura(300)
document.querySelector('[wm-flappy]').appendChild(b.elemento) */

/* criando o par de barreiras */
/* função construtora - x = posição x horizontal*/
function ParDeBarreiras(altura, abertura, x){
    /* criando a tag div com a class par-de-barreiras */
    this.elemento = novoElemento('div', 'par-de-barreiras')

    /* barreira superior */
    this.superior = new Barreira(true)

    /* barreira inferior */
    this.inferior = new Barreira(false)

    /* adicionando dentro da div par de barreiras o elemento superior */
    this.elemento.appendChild(this.superior.elemento)

    /* adicionando dentro da div par de barreiras o elemento inferior */
    this.elemento.appendChild(this.inferior.elemento)

    /* criando a função para sortear a abertura da barreira */
    this.sortearAbertura = () => {
        /* sorteando e calculando a altura superior */
        const alturaSuperior = Math.random() * (altura - abertura)
        
        /* calculando a altura inferior */
        const alturaInferior = altura - abertura - alturaSuperior
        
        /* definindo a altura superior */
        this.superior.setAltura(alturaSuperior)
        
        /* definindo a altura inferior */
        this.inferior.setAltura(alturaInferior)
        
    }

    /* pegando o x na posição atual */
    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    /* alterando o x através do x que foi passado */
    this.setX = x => this.elemento.style.left = `${x}px`
    /* pegando a largura */
    this.getLargura = () => this.elemento.clientWidth

    /* sorteando a abertura */
    this.sortearAbertura()
    /* definindo a posição da barreira no eixo horizontal */
    this.setX(x)
}

/* const b = new ParDeBarreiras(500, 200, 800)
document.querySelector('[wm-flappy]').appendChild(b.elemento) */

/* função para posicionar as barreiras no jogo */
/* função construtora */
function Barreiras(altura, largura, abertura, espaco, notificarPonto){
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3)
    ]

    const deslocamento = 3
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento)

            //quando o elemento sair da área do jogo 
            if (par.getX() < -par.getLargura()){
                par.setX(par.getX() + espaco * this.pares.length)
                //sorteando a barreira novamente
                par.sortearAbertura()
            }

            const meio = largura / 2
            const cruzouOMeio = par.getX() + deslocamento >= meio
                && par.getX() < meio
            if(cruzouOMeio) notificarPonto()
        })
    }
}

/* criando o passaro */
/* função construtora */
function Passaro(alturaJogo) {
    let voando = false

    /* criando a tag img com a class passaro */
    this.elemento = novoElemento('img', 'passaro')
    /* passando o caminho da imagem */
    this.elemento.src = 'imgs/passaro.png'

    /* pegando a altura atual do passaro */
    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])

    /* setando a altura do passaro */
    this.setY = y => this.elemento.style.bottom = `${y}px`

    /* quando o usuário pressionar uma teclas o passáro sobe */
    window.onkeydown = e => voando = true

    /* quando o usuário soltar a teclas o passáro desce */
    window.onkeyup = e => voando = false

    /* manipulando a altura do passáro */
    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5)
        const alturaMaxima = alturaJogo - this.elemento.clientWidth

        if (novoY <= 0) {
        this.setY(0)
        } else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima)
        } else {
            this.setY(novoY)
        } 
    }

    /* setando posição inicial do passáro */
    this.setY(alturaJogo / 2)
}




/* criando o marcador de pontos do jogo */
/* função construtora */
function Progresso() {
    
    /* criando a tag span com a class progresso*/
    this.elemento = novoElemento('span', 'progresso')
    
    /* criando a função atualizar pontos */
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos
    }
    /* a pontuação vai começar com 0 */
    this.atualizarPontos(0)
}

/* colisão */
function estaoSobrepostos(elementoA, elementoB) {
    /* O método Element.getBoundingClientRect() retorna o tamanho de um elemento e sua posição relativa ao viewport. */
    const a = elementoA.getBoundingClientRect()
    const b = elementoB.getBoundingClientRect()

    /* verificando se tem sobreposição horizontal */
    const horizontal = a.left + a.width >= b.left
        && b.left + b.width >= a.left

    /* verificando se tem sobreposição vertical */
    const vertical = a.top + a.height >= b.top
        && b.top + b.height >= a.top

    return horizontal && vertical
}

function colidiu(passaro, barreiras) {
    let colidiu = false
    barreiras.pares.forEach(parDeBarreiras => {
        if(!colidiu) {
            const superior = parDeBarreiras.superior.elemento
            const inferior = parDeBarreiras.inferior.elemento
            colidiu = estaoSobrepostos(passaro.elemento, superior)
                || estaoSobrepostos(passaro.elemento, inferior)
        }
    })
    return colidiu
}

function FlappyBird() {
    let pontos = 0

    /* selecionando a área do jogo */
    const areaDoJogo = document.querySelector('[wm-flappy]')
    
    /* calculando a altura da área do jogo */
    const altura = areaDoJogo.clientHeight

    /* calculando a largura da área do jogo */
    const largura = areaDoJogo.clientWidth

    /* criando o progresso */
    const progresso = new Progresso()

    /* criando as barreiras e atualizando os pontos */
    const barreiras = new Barreiras(altura, largura, 250, 400,
        () => progresso.atualizarPontos(++pontos))

    /* criando o passaro */
    const passaro = new Passaro(altura)

    /* adicionando o progresso na área do jogo*/
    areaDoJogo.appendChild(progresso.elemento)

    /* adicionando o passaro na área do jogo */
    areaDoJogo.appendChild(passaro.elemento)

    /* adicionando os pares de barreiras na área do jogo */
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

    /* iniciando o jogo */
    this.start = () => {
        // loop do jogo
        const temporizador = setInterval(() => {
            barreiras.animar()
            passaro.animar()

            if (colidiu(passaro, barreiras)) {
                clearInterval(temporizador)
            }
        }, 20)
    }
}
new FlappyBird().start()
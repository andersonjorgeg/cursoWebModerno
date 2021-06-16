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
    /* criando a barreira */
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
    /* criando a div par de barreiras */
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

const b = new ParDeBarreiras(500, 200, 800)
document.querySelector('[wm-flappy]').appendChild(b.elemento)
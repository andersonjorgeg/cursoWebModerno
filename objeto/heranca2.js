//? cadeia de protótipo (prototype chain)
Object.prototype.atributo0 = 'Z' //!EVITE FAZER ISSO!!!

//? tem o Object.prototype
const avo = { atributo1: 'A' }

//? para ligar o pai ao avô usa o __proto__
const pai = { __proto__: avo, atributo2: 'B', atributo3: '3' }
const filho = { __proto__: pai, atributo3: 'C'}
const sobrinho = {atributo4: 'D'}

console.log(filho.atributo0, filho.atributo1, filho.atributo2, filho.atributo3)

//? só pega o atributo0 por que o Object.prototype tem herança com todos os objetos.
console.log(sobrinho.atributo0, sobrinho.atributo1, sobrinho.atributo2, sobrinho.atributo3)


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual} km/h de ${this.velMax} km/h`
    }
    
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //? shadowing - sombreamento vai sobrescrever a velocidade do carro
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`//? super vai chamar o método do prototipo 
    }
}

//? estabeleceu uma relação de prototipo entre ferrari e carro é como se estivesse usando o __proto__
//? estabeleceu uma relação de prototipo entre volvo e carro é como se estivesse usando o __proto__
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())//? com o super ele pegou o atributo do pai que velMax: 200 km/h

ferrari.acelerarMais(300)
console.log(ferrari.status())
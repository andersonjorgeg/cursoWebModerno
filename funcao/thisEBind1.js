const pessoa = {
    saudacao: 'Bom dia!',
    falar () {
        console.log(this.saudacao)//? o this serve para acessar o atributo do objeto
    }
}

pessoa.falar()

const falar = pessoa.falar
falar()//! conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

const falar2 = pessoa.falar
falar2()//! conflito entre paradigmas: funcional e OO
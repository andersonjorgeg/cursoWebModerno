/* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
 */

const jurosSimples = function(capitalInicial, taxaJuros, TempoAplicacao){
    const montante = capitalInicial + (capitalInicial * taxaJuros * TempoAplicacao)
    return console.log(montante)
}

const jurosComposto = function(capitalInicial, taxaJuros, TempoAplicacao){
    const montante = capitalInicial * (1 + taxaJuros) ** TempoAplicacao
    return console.log(montante)
}

jurosSimples(100, 10 / 100, 2)

jurosComposto(100, 10 / 100, 2)
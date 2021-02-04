/* 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130 */

const planoSaude = function(idade) {
    if (idade < 10){
        const valorTotal = 100 + 80
        return valorTotal
    } else if (idade >= 10 && idade <= 30){
        const valorTotal = 100 + 50
        return valorTotal
    } else if (idade > 30 && idade <= 60){
        const valorTotal = 100 + 95
        return valorTotal
    } else if (idade > 60) {
        const valorTotal = 100 + 130 
        return valorTotal
    }
}

console.log(planoSaude(8))
console.log(planoSaude(15))
console.log(planoSaude(35))
console.log(planoSaude(52))
console.log(planoSaude(80))
function area(largura, altura) {
    const area = largura * altura
    if (area > 20){
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2,2))
console.log(area(2))//? 2 * undefined = NaN
console.log(area())//? undefined * undefined = NaN
console.log(area(2, 3, 17, 22, 44))//? vai pegar os dois primeiros e ignorar o resto
console.log(area(5, 5))
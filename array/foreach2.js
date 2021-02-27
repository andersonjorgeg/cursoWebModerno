Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

//? forEach2 criado manualmente a partir da linha 1
aprovados.forEach2(function (nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach2(function (nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})

//? forEach nativo do javascript 
aprovados.forEach(function (nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})


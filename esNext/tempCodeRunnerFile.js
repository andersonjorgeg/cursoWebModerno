let p3 = new Promise(function (resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

p3.then(function(valor) {
    for (let nome of valor) {
        console.log(nome)
    }
})
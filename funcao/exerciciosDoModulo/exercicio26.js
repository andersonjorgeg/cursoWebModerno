/* 26) Fazer um programa para encontrar todos os pares entre 1 e 100. */

const paresAte100 = function(){
    for(let i = 1; i <= 100; i++){
        if (i % 2 == 0){
            console.log(i)
        }
    }
}

paresAte100()
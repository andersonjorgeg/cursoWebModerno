//?importando o gulp
const gulp = require('gulp')

//!cada função representa uma tarefa

//?importando de dentro do gulp o series. 
const { series, parallel } = require('gulp')
//const series = gulp.series//? uma das formas de fazer 


const antes1 = cb => {
    console.log('Tarefa antes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa antes 2!')
    return cb()
}

function copiar(cb){
    //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])

    /* pega todos arquivos da pasta com final .txt */
    gulp.src('pastaA/**/*.txt')
        //.pipe(imagemPelaMetade())
        //.pipe(imagemPretoEBranco())
        //.pipe(transformacaoA())
        //.pipe(transformacaoB())
        //.pipe(transformacaoC())
        .pipe(gulp.dest('pastaB'))
        
    return cb()
}

const fim = cb => {
    console.log('Tarefa fim!')
    return cb()
}

/* exportando */
module.exports.default = series(
    parallel(antes1,antes2),
    copiar,
    fim,
)



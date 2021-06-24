const gulp = require('gulp')
const webserver = require('gulp-webserver')
const { watch } = require('gulp')

function servidor() {
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true, //?abrir o browser
            livereload: true,

        }))
}

function monitorarArquivos(cb){
    watch('src/**/*.html', gulp.series('appHTML'))
    watch('src/assets/imgs/**/*.*', gulp.series('appIMG'))
    watch('src/**/*.js', gulp.series('appJS'))
    watch('src/**/*.scss', gulp.series('appCSS'))

    return cb()
}


module.exports = {
    monitorarArquivos,
    servidor
}
//? uma factory retorna um novo objeto
module.exports = () => {
    return {
        valor: 1,
        incrementar() {
            this.valor++
        }
    }
}
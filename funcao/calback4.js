//? selecionar o botão
const $button = document.querySelector('button');

const handleClick = () => {
    console.log("Button foi clicado");
};

//? adicionar o evento de click
//?função callback é quando uma função aguarda para ser executada.
$button.addEventListener('click', handleClick);
//! video exercício callback no javascript youtube link https://youtu.be/0haWgdHFuJw

function newButton(text, callback){
    //?selecionando uma tag html
    const $body = document.querySelector('body');
    
    //?criando um button no html usando javascript
    const $button = document.createElement('button');
    
    //?definindo um texto no button
    $button.textContent = text;
    
    callback($button);

    //?adicionando o button dentro do body no documento html
    $body.insertAdjacentElement("beforeend", $button);

    return $button;
}

//* chamada da função 
//* 1° parâmetro = nome do botão
//* 2° parâmetro = chamada da função callback na linha 11
newButton('Login', (login) => {
    //?alterar css através do javascript
    login.style.cssText = `
        font-size: 40px;
    `;
    //? função para pegar um evento
    login.addEventListener("click", () => {
        console.log("clicou no login")
    })
});

//* chamada da função 
//* 1° parâmetro = nome do botão
//* 2° parâmetro = chamada da função callback na linha 11
newButton('Signup', (signup) => {
    //?alterar css através do javascript
    signup.style.cssText = `
        font-size: 30px;
    `;
    //? função para pegar um evento
    signup.addEventListener("click", () => {
        console.log("clicou no signup");
    })
});

/* exemplo antes da calback da linha 11 video callback no javascript youtube.
//?alterar css através do javascript
login.style.cssText = `
    font-size: 40px;
`;

//? função para pegar um evento
login.addEventListener("click", () => {
    console.log("Fazendo login");
});

//?alterar css através do javascript
signup.style.cssText = `
    font-size: 30px;
    color: red;
`;

//?função para pegar um evento
signup.addEventListener('click', () => {
    console.log("fazendo signup");
}) */
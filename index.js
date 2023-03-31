let exibir = true;
  
let titulo = document.createElement('h1')
titulo.innerHTML = 'meu titulo';

let header = document.createElement('header');
header.className = 'margin-auto';
header.append(titulo);

let botao = document.createElement('button');
botao.innerHTML = 'Ocultar';
botao.addEventListener('click', (event) => {
  if (exibir) {
    event.target.innerHTML = 'Exibir';
    header.setAttribute('style', 'display: none');
  } else {
    event.target.innerHTML = 'Ocultar';
    header.setAttribute('style', 'display: block');
  }
  exibir = !exibir;
});

// let no = document.querySelectorAll('h1');
// console.log(no);

let inputText = document.createElement('input');
inputText.setAttribute('type', 'text');
inputText.setAttribute('name', 'nome');

let inputSubmit = document.createElement('input');
inputSubmit.setAttribute('type', 'submit');
inputSubmit.setAttribute('value', 'Send');

let form = document.createElement('form')
form.append(inputText);
form.append(inputSubmit);
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new
FormData(event.target);
  console.log(formData.get('nome'));
});

let main = document.createElement('main');
main.className = 'margin- auto h-100';
main.append(form);

let footer = document.createElement('footer');

let root = document.getElementById('root');
root.append(header);
root.append(botao);
root.append(main);
root.append(footer);
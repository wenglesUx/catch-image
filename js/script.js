//variaveis
let button = document.querySelector('#button-search');
let display = document.querySelector('#display-area');
let desc = document.querySelector('#description');
let descArea = document.querySelector('#description-area');

const menus = document.querySelector('#hidde-menu')
const inforArea = document.querySelector('#area')
const sobre = document.querySelector('#info')
const close = document.querySelector('#close')


//Eventos

button.addEventListener('click',submit)

menus.addEventListener('click',()=>{
   inforArea.classList.toggle('opacit')
   
});

close.addEventListener('click',()=>{
    inforArea.classList.toggle('opacit')
});
//Funções
function submit(e){
    e.preventDefault()
 
    textinfo = document.querySelector('#text-area').value

  
let generate = `<img src ="https://source.unsplash.com/600x500/?${textinfo}">`
display.innerHTML = generate

desc.innerText = `Imagem relacionada a sua pesquisa sobre ${textinfo}`

descArea.style.display = 'block'
}


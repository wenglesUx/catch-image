
let button = document.querySelector('#button-search');
let display = document.querySelector('#display-area');
let desc = document.querySelector('#description');
let desarea = document.querySelector('#description-area');

button.addEventListener('click',submit)

function submit(e){
    e.preventDefault()
    newctt = '';
    textinfo = document.querySelector('#text-area').value

  
let generate = `<img src ="https://source.unsplash.com/600x500/?${textinfo}">`
display.innerHTML = generate
desc.innerText = textinfo
desarea.style.display = 'block'
}
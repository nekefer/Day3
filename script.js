const close = document.getElementById('close')
const open = document.getElementById('open')
const container = document.querySelector('.container')

close.addEventListener('click', ()=>{
    container.classList.remove('active')
})
open.addEventListener('click',()=>{
    container.classList.add('active')
})
const open = document.querySelector('#open')
const plan = document.getElementById('opens')
const venus = document.getElementById('venus')
const mars = document.getElementById('mars')
const modal_container = document.getElementById('modal-container')
const closey = document.getElementById('close')
const circles = document.querySelectorAll('orbit-circles')

open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

venus.addEventListener('click', () => {
    modal_container.classList.add('show');
})

mars.addEventListener('click', () => {
    modal_container.classList.add('show');
})



close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});

circles.onload = function orbitz(){
    circles.style.animate = spiny 12s linear infinite;
}
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.modal-container');
const button = document.querySelector('button');
const hop = document.querySelector('.hop');

/*planets.forEach(planet => {
    planet.addEventListener('click', () => {
        modalContainer.classList.add('hop');
    })
})*/


planets.forEach(function(planet){
    planet.addEventListener('click', () => {
        modalContainer.classList.add('hop');
    })
})

/*button.foreach(button => {
    button.addEventListener('click', () => {
        modalContainer.classList.add('hop');
    })
})*/

button.addEventListener('click', () => {
    modalContainer.classList.add('hop');
})
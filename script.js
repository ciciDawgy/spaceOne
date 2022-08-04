/*I think in order to get the planets and h1s to show up in each individual modal I need to get something with e.target,
getAttribute, and set innerHtml */

const orbitContain = document.querySelector('.orbitContainer');
const solarContain = document.querySelector('.solarContainer');
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.modal-container');
const planets = document.querySelectorAll('.planet');
const rocket = document.querySelector('.rocket');
const titleOne = document.querySelector('h1');
const earth = document.querySelector('.earth');
const hop = document.querySelector('.hop');
const showNow = document.querySelector('.showNow');
const showMe = document.querySelector('.showMe');
const jupitor = document.querySelector('.jupitor');
const blah = document.querySelector('.blah');
let val = e.target.src;

const openMe = document.getElementById('open');
const closeMe = document.getElementById('close');
const hi = document.querySelector('.hi');
const hihi = document.querySelector('.hihi');

/*planets.forEach(planet => {
    planet.addEventListener('click', () => {
        modalContainer.classList.add('hop');
    })
})*/


/*planets.forEach(function(planet){
    planet.addEventListener('click', () => {
        modalContainer.classList.add('hop');
    })
})*/

closeMe.addEventListener('click', () => {
    modalContainer.classList.remove('hop');
})

/*jupitor.addEventListener('click', () => {
    modalContainer.classList.add('hop');
})*/


/*panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})*/




function showRocket() {
    rocket.classList.add('show');
}

setTimeout(showRocket, 18000);


/*planets.forEach((planet) => {
    planet.addEventListener('click', () => {
        modal.classList.add('show');
    })
})*/


/*
planets.forEach((planet, e) => {
    planet.addEventListener('click', () => {
        var currentUrl = window.location.href;
        const currentPlanet = e.target.src; /*appendChild to modal? */
        /*modal_container.classList.add('show');
        currentPic();
    })
})
function currentPic() {
    const notif = document.createElement('div');
    notif.classList.add('');
    modal_container.appendChild(notif);
}

/*function getImg(e) {
  let val = e.target.src;
}
click(function(event) {
    div.html(event.target.href);
    event.preventDefault(); // Used to prevent the page from redirecting to google.com, just used for demo, you can remove it in your actual if not needed
  });
function onClick(e){
    let val;
    val = e;
    val = e.target.src;
}*/



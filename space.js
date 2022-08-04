/*I think in order to get the planets and h1s to show up in each individual modal I need to get something with e.target,
getAttribute, and set innerHtml */

const orbitContain = document.querySelector('.orbitContainer');
const cheege = document.querySelector('.orbit');
const loMein = document.querySelector('.loMein');


const modal = document.querySelector('.modal');
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');
const planets = document.querySelectorAll('.planet');
const orbitContainer = document.querySelector('.orbitContainer');
const rocket = document.querySelector('.rocket');
const titleOne = document.querySelector('h1');
const earth = document.querySelector('.earth');
const modalPlanet = document.querySelector('.modalPlanet');
let val = e.target.src;


close.addEventListener('click', () => {
    modal_container.classList.remove('show');
})




planets.forEach((planet) => {
    planet.addEventListener('click', () => {
        modal.classList.add('show');
    })
})


/*planets.forEach((planet, e) => {
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
}*/



function showRocket() {
    rocket.classList.add('show');
}



setTimeout(showRocket, 18000);


/*function showPlanets() {
    orbitContain.classList.add('showNow');
}

setTimeout(showPlanets, 33000);*/


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
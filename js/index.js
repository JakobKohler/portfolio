const overlayNav = document.querySelector('#overlayNav');
const hamLines = document.querySelectorAll('.ham-line');
/*const hamBtn = document.querySelector('#hamMenu');*/
const $nav = $('#overlayNav');
const $ham = $('#hamMenu');

let openBool = false;

function navButton(){
    openBool = !openBool;
    if (openBool){
        openOverlay();
    }else{
        closeOverlay();
    }
}

document.addEventListener('click', (ev) => {
    if (openBool && !$nav.is(ev.target) && $nav.has(ev.target).length === 0){
        if (!$ham.is(ev.target) && $ham.has(ev.target).length === 0){
            closeOverlay();
        }
    }
});

function openOverlay(){
    overlayNav.classList.add('overlay-width')
    hamLines.forEach(line => line.classList.add('menu-open'));
}
function closeOverlay(){
    overlayNav.classList.remove('overlay-width');
    hamLines.forEach(line => line.classList.remove('menu-open'));
}

const animationLength = 6000;
//svg try
let svg = new Walkway({
    selector: '#strokeSvg',
    duration: animationLength.toString(),
    easing: function (t) {
        return t*t;
    }
});
svg.draw();
let svgInterval = setInterval(() => {
    svg.redraw();
}, animationLength + 1000);

let animationScrolldown = bodymovin.loadAnimation({
    container: document.getElementById('scrolldown'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/scrollDown.json'
});
import '../styles/styles.scss';
import Swiper from 'swiper/bundle';
import 'swiper/scss'
import 'swiper/scss/pagination'

import Menu from './modules/Menu';


if(module.hot) {
    module.hot.accept();
}

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    disableOnInteraction: false,
    autoplay: {
        delay: 1500,
    },
});


let menu = new Menu;

// Quick intersection observer to fix the hamburger icon blending with the white background
// Enable at your own personal choice
// Change color in js-hamburger-color
let topPage = document.querySelector('.page-top');
let hamburger = document.querySelector('.hamburger');

let observer = new IntersectionObserver(function(entries, observer) {
    let [entry] = entries;
    console.log(entry)
    hamburger.classList.remove('js-hamburger-color')

    if(entry.isIntersecting) return
    hamburger.classList.add('js-hamburger-color')

    console.log(entry.target)
   
}, {
    root: null,
    threshold: 0
})

// observer.observe(topPage)

console.log(document.title)

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


class Menu {
    constructor() {
        this.hamburger = document.querySelector('.hamburger');
        this.mainNav = document.querySelector('.main-nav'); 
        this.jsPagination = document.querySelector('.js-pagination');
        this.mainHeading = document.querySelector('.main-heading')

        this.events()
    }

    events() {
        this.hamburger.addEventListener('click', this.open.bind(this))
    }

    open() {
        this.hamburger.classList.toggle('hamburger-active');
        this.mainNav.classList.toggle('main-nav-active');
        this.jsPagination.classList.toggle('js-pagination-hidden');
        this.mainHeading.classList.toggle('js-heading-hidden');
    }

    close() {
        this.hamburger.classList.remove('hamburger-active');
        this.mainNav.classList.remove('main-nav-active'); 
    }
}

export default Menu;
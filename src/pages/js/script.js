function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu')
    let navMenu = document.querySelector('.nav')

    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "/pages/imgs/menu-open.png";
        navMenu.classList.remove('noShadow')
    } else{
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "/pages/imgs/menu-close.png";
        navMenu.classList.add('noShadow')
    }
}
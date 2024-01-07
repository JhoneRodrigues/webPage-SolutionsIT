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

let services = document.querySelectorAll('.services')
window.onscroll = () => {
    services.forEach(serv => {
        let top = window.scrollY;
        let offset = serv.offsetTop - 340;
        let height = serv.offsetHeight;

        if(top >= offset && top < offset + height){
            serv.classList.add('show-animation');
        }
        else{
            serv.classList.remove('show-animation');
        }
    })
}
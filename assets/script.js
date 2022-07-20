/*MENU SHOW Y HIDDEN*/
const navMenu  = document.getElementById('nav-menu'),
    navtoggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*MENU SHOW*/
/*validate if constant exist*/
if (navtoggle){
    navtoggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*MENU HIDDEN*/
if (navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*REMOVE MENU MOBILE*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.forEach(n => n.addEventListener('click', linkAction))
}
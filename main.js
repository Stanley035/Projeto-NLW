const body = document.getElementById('body')
const buttonOpen = document.querySelector('.open-menu')
const buttonClose = document.querySelector('.close-menu')
const menuText = document.querySelector('.menu-text')
const butonBackTop = document.querySelector('#backTop')
const buttonContact = document.getElementById('buttonContact')


window.addEventListener('scroll', nave)
window.addEventListener('scroll', backtop)
document.addEventListener('scroll', nave)
document.addEventListener('scroll', backtop)
buttonOpen.addEventListener('click', openAndCloseMenu)
buttonClose.addEventListener('click', openAndCloseMenu)
menuText.addEventListener('click', openAndCloseMenu)
buttonContact.addEventListener('click', openAndCloseMenu )


function nave() {
    if (scrollY > 0) {
        navigation.setAttribute('class', 'scroll')
    } else {
        navigation.removeAttribute('class')
    }    
}

function backtop() {
    if (scrollY > 1600) {
        butonBackTop.setAttribute('class', 'scroll')
    } else {
        butonBackTop.removeAttribute('class')
    } 
}



function openAndCloseMenu() {    
    if (body.classList == '') {
        body.setAttribute('class', 'menu-expanded')
    } else {
        body.removeAttribute('class')        
    }       
}


ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 750,
}).reveal(`#home, 
#home img, 
#home .stats,
#services h4,
#services h2, 
#services .card,
#about h4,
#about h2,
#about p,
#about img`);

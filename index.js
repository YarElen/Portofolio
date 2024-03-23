let stateHamburgerButton = true
const toggleHamburger = document.getElementById('toggle-hamburger');
const navbarMobile = document.getElementById('navbar-mobile')

toggleHamburger.addEventListener('click', () => {
    if (stateHamburgerButton) {
        document.getElementById('icon-open').classList.replace('block', 'hidden')
        document.getElementById('icon-close').classList.replace('hidden', 'block')
        navbarMobile.classList.replace('hidden', 'block')
    } else {
        document.getElementById('icon-open').classList.replace('hidden', 'block')
        document.getElementById('icon-close').classList.replace('block', 'hidden')
        navbarMobile.classList.replace('block', 'hidden')
    }
    stateHamburgerButton ? stateHamburgerButton = false : stateHamburgerButton = true
})
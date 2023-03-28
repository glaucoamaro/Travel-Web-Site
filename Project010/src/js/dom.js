const buttonBurge = document.querySelector('.navigation__menu__content')
buttonBurge.addEventListener("click", () => {
    const showNavBar = document.querySelector('.navigation__bar__items')
    const displayNavBar = showNavBar.style.display
    showNavBar.style.display = displayNavBar === 'flex' ? 'none' : 'flex'
})
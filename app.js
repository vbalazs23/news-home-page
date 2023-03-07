
// Navbar hamburger event listeners

const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const closeBurger = document.querySelector('.hamburger-close');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
    navList.classList.add("show");
    closeBurger.classList.remove("hidden");
});

closeBurger.addEventListener('click', () => {
    navList.classList.remove("show");
    closeBurger.classList.add("hidden");
})
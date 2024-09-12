// get a handle on the elements
const hamburgerButton = document.querySelector(".hamburger")
const closeButton = document.querySelector(".menu .close")
const menu = document.querySelector(".menu")
const overlay = document.querySelector(".overlay")

hamburgerButton.addEventListener("click", ()=> {
    menu.style.display = "flex"
    overlay.style.display = "block"

})

closeButton.addEventListener("click", (e)=> {
    e.preventDefault();
    hideMenu();
})

overlay.addEventListener("click", ()=> {
    hideMenu()
})

function hideMenu() {
    menu.style.display = "none"
    overlay.style.display = "none"
}

var togglebutton = document.getElementById("togglebutton");
var navbar = document.getElementById("navbar");
var navlinks = document.querySelector(".navlinks");
togglebutton.addEventListener("click", function () {
    navbar.classList.toggle("navbar-on");
    togglebutton.classList.toggle("is-active");
    navlinks.classList.toggle("is-active");
});

const img = document.querySelectorAll("img");
const icons = document.querySelector(".icons");
for (var i = 0; i < img.length; i++) {
    img[i].onclick = function () {
        this.classList.toggle("active");
        icons.classList.toggle("active");
    }
}
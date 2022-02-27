var togglebutton = document.getElementById("togglebutton");
var navbar = document.getElementById("navbar");
var navlinks = document.querySelector(".navlinks");
togglebutton.addEventListener("click", function () {
    navbar.classList.toggle("navbar-on");
    togglebutton.classList.toggle("is-active");
    navlinks.classList.toggle("is-active");
});

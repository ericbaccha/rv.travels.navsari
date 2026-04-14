/* MOBILE MENU TOGGLE */
function toggleMenu(){
const menu = document.getElementById("menu");
menu.classList.toggle("active");
}


/* CLOSE MENU WHEN CLICKING A LINK */
document.querySelectorAll(".menu a").forEach(link => {
link.addEventListener("click", () => {
document.getElementById("menu").classList.remove("active");
});
});


/* SCROLL ANIMATION (REVEAL EFFECT) */
function revealElements(){
const reveals = document.querySelectorAll(".reveal");

reveals.forEach(el => {
const windowHeight = window.innerHeight;
const elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 80){
el.classList.add("show");
}
});
}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

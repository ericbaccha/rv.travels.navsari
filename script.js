document.addEventListener("DOMContentLoaded", function(){

// MENU
const btn = document.getElementById("menu-btn");
const mobile = document.getElementById("mobile-menu");

if(btn && mobile){
btn.addEventListener("click", () => {
mobile.classList.toggle("active");
});
}

// ANIMATION
const elements = document.querySelectorAll(".animate");

function reveal(){
elements.forEach(el => {
const top = el.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
el.classList.add("show");
}
});
}

// RUN ALWAYS
reveal();
window.addEventListener("scroll", reveal);

});

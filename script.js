document.addEventListener("DOMContentLoaded", function(){

const btn = document.getElementById("menu-btn");
const mobile = document.getElementById("mobile-menu");

if(btn && mobile){
btn.addEventListener("click", function(){
mobile.classList.toggle("active");
});
}

/* ANIMATION */
const elements = document.querySelectorAll(".animate");

function runAnimation(){
elements.forEach(el=>{
const top = el.getBoundingClientRect().top;

if(top < window.innerHeight - 80){
el.classList.add("show");
}
});
}

runAnimation();
window.addEventListener("scroll", runAnimation);

});

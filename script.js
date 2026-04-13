// mobile menu
const btn = document.getElementById("menu-btn");
const mobile = document.getElementById("mobile-menu");

if(btn){
btn.onclick = () => mobile.classList.toggle("active");
}

const elements = document.querySelectorAll(".card, .contact-box");

function showOnScroll(){
elements.forEach(el=>{
const top = el.getBoundingClientRect().top;

if(top < window.innerHeight - 80){
el.classList.add("show");
}
});
}

// run on load
window.addEventListener("load", showOnScroll);

// run on scroll
window.addEventListener("scroll", showOnScroll);

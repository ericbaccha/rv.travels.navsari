// mobile menu
const btn = document.getElementById("menu-btn");
const mobile = document.getElementById("mobile-menu");

if(btn){
btn.onclick = () => mobile.classList.toggle("active");
}

// animations
const elements = document.querySelectorAll(".card, .contact-box");

function animate(){
elements.forEach(el=>{
const top = el.getBoundingClientRect().top;
if(top < window.innerHeight - 80){
el.classList.add("show");
}
});
}

window.addEventListener("load", animate);
window.addEventListener("scroll", animate);

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");

if(btn){
btn.addEventListener("click",()=>{
menu.classList.toggle("active");
});
}

// scroll animation
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", ()=>{
cards.forEach(card=>{
const top = card.getBoundingClientRect().top;
if(top < window.innerHeight - 80){
card.classList.add("show");
}
});
});

document.addEventListener("DOMContentLoaded", function(){

// MOBILE MENU (unchanged)
const btn = document.getElementById("menu-btn");
const mobile = document.getElementById("mobile-menu");

if(btn && mobile){
btn.onclick = () => mobile.classList.toggle("active");
}

// SIMPLE ANIMATION
const elements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries)=>{
entries.for

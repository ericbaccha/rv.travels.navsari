document.addEventListener("DOMContentLoaded", function(){

const btn = document.getElementById("menu-btn");
const mobile = document.getElementById("mobile-menu");

if(btn && mobile){
btn.addEventListener("click", function(){
mobile.classList.toggle("active");
});
}

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
anchor.addEventListener('click', function(e){
e.preventDefault();
const target = document.querySelector(this.getAttribute("href"));
if(target){
target.scrollIntoView({behavior:"smooth"});
}
});
});

});

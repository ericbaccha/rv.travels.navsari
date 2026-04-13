// MOBILE MENU
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

if(btn){
  btn.addEventListener("click", ()=>{
    menu.classList.toggle("show");
  });
}

// FAST FADE
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", ()=>{
  faders.forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight - 40){
      el.classList.add("show");
    }
  });
});

// MOBILE MENU TOGGLE
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if(menuBtn){
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
  });
}

// SCROLL ANIMATION
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 80){
      el.classList.add("show");
    }
  });
});

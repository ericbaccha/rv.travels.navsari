// SCROLL ANIMATION
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  faders.forEach(el => {
    if(el.getBoundingClientRect().top < window.innerHeight - 80){
      el.classList.add("show");
    }
  });
});

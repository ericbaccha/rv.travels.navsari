function toggleMenu(){
document.getElementById("menu").classList.toggle("active");
}

const items=document.querySelectorAll('.reveal');

const observer=new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add('show');
}
});
},{threshold:0.15});

items.forEach(el=>observer.observe(el));

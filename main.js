const bottone = document.querySelector(".fa-bars");
const bottone2 = document.querySelector(".fa-times");
const menu = document.querySelector(".hamburger-menu");


bottone.addEventListener("click", function(){
    menu.classList.add ("active");
});


bottone2.addEventListener("click", function(){
    menu.classList.remove ("active");
});
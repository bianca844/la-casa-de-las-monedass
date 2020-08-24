var botaomenu = document.querySelector(" nav section i");
var menu = document.querySelector("nav section:nth-child(3)");

botaomenu.addEventListener('click', function() {
    menu.classList.toggle('mostrar');
});


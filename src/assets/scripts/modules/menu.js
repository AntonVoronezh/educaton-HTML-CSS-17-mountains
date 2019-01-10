export default function getMenu() {
    const button = document.querySelector("#nav-icon3");
    const overlay = document.querySelector(".overlay");
    const body = document.querySelector("body");

    const makeMenu = () => {

        overlay.classList.toggle('overlay-plus');

        setTimeout(function() {

            body.classList.toggle('body'); 

        }, 1000);

    };

    
    button.addEventListener("click", function() {

        button.classList.toggle("open");

      });

    button.addEventListener('click', makeMenu);

   
}
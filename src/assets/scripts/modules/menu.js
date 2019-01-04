export default function getMenu() {
    const button = document.querySelector("#nav-icon3");


    const makeMenu = () => {

        // flipper.classList.toggle('flip-active');
        console.log('sss');
        

    };

    button.addEventListener("click", function() {
        // Toggle class "is-active"
        button.classList.toggle("open");
        // Do something else, like open/close menu
      });

    button.addEventListener('click', makeMenu);

}
export default function flipCard() {

    const button = document.querySelector(".btn--welcome");
    const flipper = document.querySelector(".flipper");
    const mainPage = document.querySelector(".btn-card--back");

    const makeFlip = () => {

        flipper.classList.toggle('flip-active');

    };

    const deleteBtn = (e) => {

        e.preventDefault();

        button.classList.toggle('visually-hidden');

    };

    button.addEventListener('click', makeFlip);
    button.addEventListener('click', deleteBtn);

    mainPage.addEventListener('click', makeFlip);
    mainPage.addEventListener('click', deleteBtn);

}
export default function asideMenu() {

    const getAside = document.querySelector(".blog__aside");
    const getAsideCircle = document.querySelector(".blog__aside-circle");
    const getAllBlogLinks = document.querySelectorAll(".blog__link");

    window.onscroll = function () {
        const scrolled = window.pageYOffset || document.documentElement.scrollTop;

        if (scrolled > 499) {
            getAside.classList.add('blog__aside--active');
        }
        if (scrolled < 500) {
            getAside.classList.remove('blog__aside--active');
        }
    }

    getAsideCircle.addEventListener('click', function () {
        getAside.classList.toggle('blog__aside--show');
    });

    getAllBlogLinks.forEach(elem => {

        elem.addEventListener('click', function () {
            getAside.classList.remove('blog__aside--show');
        });

    });

}
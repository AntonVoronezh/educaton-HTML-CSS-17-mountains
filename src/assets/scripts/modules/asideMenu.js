export default function asideMenu() {

    var getAside = document.querySelector(".blog__aside");
    const getAsideCircle = document.querySelector(".blog__aside-circle");
    const getAllBlogLinks = document.querySelectorAll(".blog__link");

    var width;

    setInterval(function () {

        width = window.innerWidth || document.documentElement.clientWidth;
        console.log(width);


        if (width < 769) {

            window.addEventListener("scroll", addActiveClass);



        }
        if (width > 768) {

            window.removeEventListener("scroll", addActiveClass);

            getAside.classList.remove('blog__aside--active');

        }

    }, 1000);


            getAsideCircle.addEventListener('click', function () {
                getAside.classList.toggle('blog__aside--show');
            });

            getAllBlogLinks.forEach(elem => {

                elem.addEventListener('click', function () {
                    getAside.classList.remove('blog__aside--show');
                });

            });


    function addActiveClass() {

        const scrolled = window.pageYOffset || document.documentElement.scrollTop;

        if (scrolled > 499) {

            getAside.classList.add('blog__aside--active');

        }
        if (scrolled < 500) {

            getAside.classList.remove('blog__aside--active');

        }

    }

}
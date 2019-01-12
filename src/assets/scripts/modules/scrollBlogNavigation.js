export default function scrollBlogNavigation() {

    var getList = document.querySelector(".blog__list");
    var width;

    setInterval(function () {

        width = window.innerWidth || document.documentElement.clientWidth;
        // console.log(width);


        if (width > 767) {

            window.addEventListener("scroll", addFixedClass);

        }
        if (width < 768) {

            window.removeEventListener("scroll", addFixedClass);

            getList.classList.remove('blog__list--fixed');

        }

    }, 1000);



    function addFixedClass() {


        const scrolled = window.pageYOffset || document.documentElement.scrollTop;


        if (scrolled > 605) {

            getList.classList.add('blog__list--fixed');

        }

        if (scrolled < 604) {

            getList.classList.remove('blog__list--fixed');

        }


    }

}


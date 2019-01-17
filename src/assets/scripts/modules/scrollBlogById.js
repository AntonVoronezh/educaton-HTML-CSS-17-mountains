export default function scrollBlogById() {

    const items = document.querySelectorAll('.blog__item');
    const links = document.querySelectorAll('.blog__link');


    links.forEach((elem, i) => {

        elem.addEventListener('click', function () {

            links.forEach(function (el) {

                el.classList.remove('blog__link--active');

            })

            items.forEach(function (el) {

                el.classList.remove('blog__item--active');

            })

            elem.classList.add('blog__link--active');
            items[i].classList.add('blog__item--active');

        });




    });


}
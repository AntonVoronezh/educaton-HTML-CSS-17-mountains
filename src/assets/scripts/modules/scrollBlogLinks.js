export default function scrollBlogLinks() {

    const elem = document.querySelector('.block');
    const texts = document.querySelectorAll('.blog__header');
    const items = document.querySelectorAll('.blog__item');
    const links = document.querySelectorAll('.blog__link');
    const textsOffset = [];

    texts.forEach(function (text) {
        textsOffset.push(text.offsetTop);
    })
    console.log(links);



    window.addEventListener('scroll', function () {

        const scrolled = window.pageYOffset || document.documentElement.scrollTop;

        textsOffset.forEach(function (offset, i) {
            console.log(scrolled, offset);
            

            if (scrolled >= offset) {

                items.forEach(function (el) {

                    el.classList.remove('blog__item--active');

                })

                links.forEach(function (el) {

                    el.classList.remove('blog__link--active');

                })

                items[i].classList.add('blog__item--active');
                links[i].classList.add('blog__link--active');

            }

        });

    });


}
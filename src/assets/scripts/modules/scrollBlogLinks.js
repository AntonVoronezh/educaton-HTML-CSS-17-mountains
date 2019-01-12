export default function scrollBlogLinks() {

    const texts = document.querySelectorAll('.blog__header');
    const items = document.querySelectorAll('.blog__item');
    const links = document.querySelectorAll('.blog__link');
    const textsOffset = [];

    texts.forEach(function (text) {

        textsOffset.push(getCoords(text).top);
        
    })


    window.addEventListener('scroll', function () {

        const scrolled = window.pageYOffset || document.documentElement.scrollTop;

        textsOffset.forEach(function (offset, i) {
            // console.log(scrolled, offset);

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

    function getCoords(elem) {
        // (1)
        var box = elem.getBoundingClientRect();
      
        var body = document.body;
        var docEl = document.documentElement;
      
        // (2)
        var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
        var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
      
        // (3)
        var clientTop = docEl.clientTop || body.clientTop || 0;
        var clientLeft = docEl.clientLeft || body.clientLeft || 0;
      
        // (4)
        var top = box.top + scrollTop - clientTop;
        var left = box.left + scrollLeft - clientLeft;
      
        return {
          top: top,
          left: left
        };
      }

}
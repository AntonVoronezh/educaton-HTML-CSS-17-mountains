export default function scrollBlur() { 

    const wrapper = document.querySelector('.comments__wrap');
    const blur = document.querySelector('.comments__back');
  
    return {
      set() {
        const imgWidth = document.querySelector('.comments').offsetWidth,
         imgWidthBack = document.querySelector('.comments__back').offsetWidth,
        //   posLeft = -wrapper.offsetLeft,
        //   posTop = -wrapper.offsetTop,
          posLeft = -wrapper.offsetLeft,
          posTop = -wrapper.offsetTop,
          blurCSS = blur.style;

          // console.log(imgWidth, imgWidthBack);
        //   console.log(-wrapper.offsetLeft, -wrapper.offsetTop);
  
        blurCSS.backgroundSize = `${imgWidth}px auto`;
        blurCSS.backgroundPosition = `${posLeft}px ${posTop}px`;
      }
    };


    // const wrapper = document.querySelector(".comments__wrap");
    // const form = document.querySelector(".comments__back");
  
    // return {
    //   set: function() {
    //     const posLeft = -wrapper.offsetLeft;
    //     const posTop = -wrapper.offsetTop;
    //     const blurCss = form.style;
  
    //     blurCss.backgroundPosition = `${posLeft}px ${posTop}px`;
    //   }
    // };

    //Схематичная разметка для понимания
    // section.b-works-what
    //     form.b-works-form
    //         .b-works-form__blur

    // const container = document.querySelector('.b-works-form');
    // const sectionEl = document.querySelector('.b-works-what');
    // const blurEl = document.createElement('.b-works-form__blur');
    
    // const drawBlur = function () {
    //   const width = sectionEl.offsetWidth;
    //   const height = sectionEl.offsetHeight;
    //   const left = container.offsetLeft;
    //   const bottom = height - (container.offsetTop + container.offsetHeight);
    
    //   blurEl.style.width = width + "px";
    //   blurEl.style.height = height + "px";
    //   blurEl.style.left = `-${left}px`;
    //   blurEl.style.bottom = `-${bottom}px`;
    // };
    



}
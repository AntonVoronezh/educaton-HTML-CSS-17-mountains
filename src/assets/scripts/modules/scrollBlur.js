export default function scrollBlur() { 

  let wrapper = document.getElementById('js_blur-wrap');
  let blur = document.getElementById('js_blur');
  
    return {
      set() {
        let imgWidth = document.getElementById('js_blur-container').offsetWidth,
        posLeft = -wrapper.offsetLeft,
        posTop = -wrapper.offsetTop,
        blurCSS = blur.style;


        blurCSS.backgroundSize = `${imgWidth}px`;
        blurCSS.backgroundPosition = `${posLeft}px ${posTop}px`;
      }
    };


}
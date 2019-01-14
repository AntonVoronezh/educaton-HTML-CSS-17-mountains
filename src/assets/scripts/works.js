import getMenu from "./modules/menu";
import scrollParallax from "./modules/scrollParallax";
import scrollBlur from "./modules/scrollBlur";
import preloader from "./modules/preloader";


preloader();

getMenu();
scrollBlur().set();

window.addEventListener("scroll", () => {
    const wScroll = window.pageYOffset;
  
    scrollParallax().init(wScroll);
  });

  window.addEventListener("resize", () => {
    // setMargin(".contact__content");
    scrollBlur().set();
    // console.log('resize');
    
  });
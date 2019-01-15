import getMenu from "./modules/menu";
import scrollParallax from "./modules/scrollParallax";
import scrollBlur from "./modules/scrollBlur";
import "./modules/preloader";
import validationFormContact from "./modules/validationFormContact";


getMenu();
validationFormContact();
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
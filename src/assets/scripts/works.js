import "./modules/preloader";
import getMenu from "./modules/menu";
import "./modules/slider";
import scrollParallax from "./modules/scrollParallax";
import scrollBlur from "./modules/scrollBlur";

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
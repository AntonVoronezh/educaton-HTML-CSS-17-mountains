import getMenu from "./modules/menu";
import scrollParallax from "./modules/scrollParallax";
import "./modules/skills";
import preloader from "./modules/preloader";


preloader();
getMenu();

window.addEventListener("scroll", () => {
    const wScroll = window.pageYOffset;
  
    scrollParallax().init(wScroll);
  });
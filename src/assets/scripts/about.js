import getMenu from "./modules/menu";
import scrollParallax from "./modules/scrollParallax";


getMenu();

window.addEventListener("scroll", () => {
    const wScroll = window.pageYOffset;
  
    scrollParallax().init(wScroll);
  });
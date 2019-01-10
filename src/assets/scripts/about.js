import getMenu from "./modules/menu";
import scrollParallax from "./modules/scrollParallax";
import "./modules/skills";

getMenu();

window.addEventListener("scroll", () => {
    const wScroll = window.pageYOffset;
  
    scrollParallax().init(wScroll);
  });
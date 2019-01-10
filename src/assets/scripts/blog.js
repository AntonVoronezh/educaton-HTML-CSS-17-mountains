import getMenu from "./modules/menu";
import scrollParallax from "./modules/scrollParallax";
import asideMenu from "./modules/asideMenu";

getMenu();
asideMenu();

window.addEventListener("scroll", () => {
    const wScroll = window.pageYOffset;
  
    scrollParallax().init(wScroll);
  });
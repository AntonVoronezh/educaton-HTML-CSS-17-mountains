import getMenu from "./modules/menu";
import scrollParallax from "./modules/scrollParallax";
import asideMenu from "./modules/asideMenu";
import scrollBlogNavigation from "./modules/scrollBlogNavigation";
import scrollBlogLinks from "./modules/scrollBlogLinks";


getMenu();
scrollBlogNavigation();
asideMenu();
scrollBlogLinks();


window.addEventListener("scroll", () => {
    const wScroll = window.pageYOffset;
  
    // scrollParallax().init(wScroll);
  });
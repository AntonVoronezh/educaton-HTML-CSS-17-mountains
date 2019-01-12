import getMenu from "./modules/menu";
import scrollParallax from "./modules/scrollParallax";
// import asideMenu from "./modules/asideMenu";
import scrollBlogNavigation from "./modules/scrollBlogNavigation";


getMenu();
scrollBlogNavigation();
// asideMenu();



window.addEventListener("scroll", () => {
    const wScroll = window.pageYOffset;
  
    // scrollParallax().init(wScroll);
  });
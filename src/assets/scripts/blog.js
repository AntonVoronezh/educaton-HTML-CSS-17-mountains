import getMenu from "./modules/menu";
import scrollParallax from "./modules/scrollParallax";
import asideMenu from "./modules/asideMenu";
import scrollBlogNavigation from "./modules/scrollBlogNavigation";
import scrollBlogLinks from "./modules/scrollBlogLinks";
import smoothScrollTo from "./modules/smoothScrollTo";
import scrollBlogById from "./modules/scrollBlogById";


getMenu();
scrollBlogNavigation();
asideMenu();
scrollBlogById();
scrollBlogLinks();
smoothScrollTo();


window.addEventListener("scroll", () => {
    const wScroll = window.pageYOffset;
  
    // scrollParallax().init(wScroll);
  });
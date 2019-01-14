import smoothScrollTo from "./modules/smoothScrollTo";
import getMenu from "./modules/menu";
import scrollParallax from "./modules/scrollParallax";
import asideMenu from "./modules/asideMenu";
import scrollBlogNavigation from "./modules/scrollBlogNavigation";
import scrollBlogLinks from "./modules/scrollBlogLinks";
import scrollBlogById from "./modules/scrollBlogById";
import preloader from "./modules/preloader";


preloader();
smoothScrollTo();
getMenu();
scrollBlogNavigation();
asideMenu();
scrollBlogById();
scrollBlogLinks();



window.addEventListener("scroll", () => {
    const wScroll = window.pageYOffset;
  
    // scrollParallax().init(wScroll);
  });



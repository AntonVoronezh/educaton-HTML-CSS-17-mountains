export default function scrollParallax() {
    const bg = document.querySelector(".header-wrap");
    const title = document.querySelector(".header__middle-wrap");
    const user = document.querySelector(".card");
  
    return {
      move: function(block, windowScroll, strafeAmount) {
        let strafe = windowScroll / -strafeAmount + "%";
        let transformString = `translate3d(0, ${strafe}, 0)`;
  
        let style = block.style;
  
        style.transform = transformString;
        style.webkitTransform = transformString;
      },
      init: function(wScroll) {
        this.move(bg, wScroll, 255);
        this.move(title, wScroll, 200);
        this.move(user, wScroll, -4);
      }
    };
  }
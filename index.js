const hamBurger = document.getElementById("ham_btn");
const hamMenu = document.getElementById("ham_menu");
hamBurger.addEventListener("click", show_hamburger);
let a = true;
function show_hamburger() {
  if (a) {
    hamMenu.style.display = "flex";
    a = false;
  } else {
    hamMenu.style.display = "none";
    a = true;
  }
}

const gsapObj = (triger, x, y, duration, stagger) => {
  return {
    x: `${x && x}`,
    y: `${y && y}`,
    duration: `${duration}`,
    stagger: `${stagger ? stagger : false}`,
    opacity: 0,

    scrollTrigger: {
      trigger: `${triger}`,
      scroller: "body",
      start: "top 70%",
    },
  };
};

// nav animate
let tl = gsap.timeline();
tl.from(".nav h2", {
  y: -40,
  opacity: 0,
  duration: 1,
});
tl.from(".nav li", {
  y: -100,
  stagger: 0.1,
});

gsap.from(".hero_left_side", gsapObj(".hero_left_side", -1000, 0, 1, false));
gsap.from(".hero_right_side", gsapObj(".hero_right_side", 1000, 0, 1, false));
// popular category animated
gsap.from(
  ".populer_catagory .h1",
  gsapObj(".populer_catagory .h1", 0, -50, 1.5, false)
);
gsap.from(
  ".populer_catagory .populer_item",
  gsapObj(".populer_catagory .populer_item", 0, 100, 1.1, 0.3)
);
// special dises
gsap.from(
  ".special_dishes .h1",
  gsapObj(".special_dishes .h1", -100, 0, 1.1, 0)
);
gsap.from(
  ".special_dishes .special_item",
  gsapObj(".special_dishes .special_item", 0, 100, 1.1, -0.3)
);
// testimiona section animated
gsap.from(
  ".Testimonial_section .img_div",
  gsapObj(".Testimonial_section .img_div", 0, -200, 2, false)
);
gsap.from(".Testimonial_section .text", gsapObj(".Testimonial_section .text", 0, 200, 2, false));

const hero = gsap.timeline();
hero.from(".hero-section", {
  opacity: 0.5,
  ease: 1,
  delay: 2,
  duration: 1,
  ease: 1,
});

hero.from(".hero-text-container", {
  opacity: 0,
  duration: 1,
  ease: 1,
  y: 100,
});
hero.from("#mainNavigation", {
  opacity: 0,
  duration: 1,
  ease: 1,
  y: -100,
});
hero.from(".nav-item", {
  opacity: 0,
  duration: 0.5,
  ease: 1,
  stagger: 0.5,
  y: -100,
});
hero.to(".hero-text-container", {
  // opacity: 0,
  duration: 0.5,
  ease: 1,

  y: -100,
});
hero.from(".hero-text-container .tagline", {
  opacity: 0,
  duration: 0.5,
  ease: 1,

  y: 20,
});
hero.to(".scroll-container", {
  opacity: 0.5,
  duration: 1.5,
  ease: 1,
  y: -30,
  repeat: -1,
});

const toggler = document.querySelector(".navbar-toggler");
let toggle = false;
toggler.addEventListener("click", () => {
  if (toggle === false) {
    gsap.to("main", {
      opacity: 0,
      duration: 1.5,
      ease: 1,
    });
    toggle = true;
  } else if (toggle === true) {
    gsap.to("main", {
      opacity: 1,
      duration: 1.5,
      ease: 1,
    });
    toggle = false;
  }
});

const mobile = gsap.matchMedia();
gsap.registerPlugin(ScrollTrigger);
const sec1 = gsap.timeline();
const sec2 = gsap.timeline();

mobile.add("(max-width: 999px)", () => {
  sec1.from(".section-1", {
    opacity: 0,
    duration: 1,
    ease: 1,
    x: -40,
    scrollTrigger: {
      trigger: ".section-1",
      start: "top bottom",
      end: "bottom bottom",
      scrub: true,
    },
  });
  sec2.from('.work', {
    y: 100,
    ease: 1,
    opacity: 0,
    // stagger: 0.5,
    duration: 1,
    scrollTrigger: {
        trigger: ".section-2",
        start: "top 90%",
        end: "bottom 100%",
        scrub: true,
    }
  })
});
const sec1Text = gsap.timeline();
sec1Text.from(".text-container h2", {
  opacity: 0,
  duration: 1,
  // delay: 1,
  ease: 1,
  y: 200,
  scrollTrigger: {
    trigger: ".section-1",
    start: "top center",
    end: "bottom bottom",
    scrub: true,
  },
});
sec1Text.from(".text-container p", {
  opacity: 0,
  duration: 1,
  // delay: 1,
  ease: 1,
  y: 200,
  scrollTrigger: {
    trigger: ".section-1",
    start: "top center",
    end: "bottom bottom",
    scrub: true,
  },
});

// pc
const pc = gsap.matchMedia();
gsap.registerPlugin(ScrollTrigger);

pc.add("(min-width: 100px)", () => {
  sec1.from(".section-1", {
    opacity: 0,
    duration: 1,
    ease: 1,
    y: 100,
    scrollTrigger: {
      trigger: ".section-1",
      start: "top 80%",
      end: "bottom 90%",
      scrub: true,
    },
  });
  
  sec2.from('.section-2', {

  })

  sec2.from('.work', {
    y: 100,
    ease: 1,
    opacity: 0,
    stagger: 0.5,
    duration: 1,
    scrollTrigger: {
        trigger: ".section-2",
        start: "top 90%",
        end: "bottom ",
        scrub: true,
    }
  })

});

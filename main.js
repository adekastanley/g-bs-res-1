

const hero = gsap.timeline()
hero.from('.hero-section', {
    opacity: 0.5,
    ease: 1,
    delay: 1,
    duration: 1,
    ease: 1
})

hero.from('.hero-text-container', {
    opacity: 0,
    duration: 1,
    ease: 1,
    y:100
})
hero.from('#mainNavigation', {
    opacity: 0,
    duration: 1,
    ease: 1,
    y:-100
})
hero.from('.nav-item', {
    opacity: 0,
    duration: .5,
    ease: 1,
    stagger: 0.5,
    y:-100
})
hero.to('.hero-text-container', {
    // opacity: 0,
    duration: .5,
    ease: 1,

    y:-100
})
hero.from('.hero-text-container .tagline', {
    opacity: 0,
    duration: .5,
    ease: 1,

    y: 20,

})

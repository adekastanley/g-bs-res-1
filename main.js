

const hero = gsap.timeline()
hero.from('.hero-section', {
    opacity: 0.5,
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
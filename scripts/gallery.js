// https://www.youtube.com/watch?v=CQHvWqYXI5s

const photos = gsap.utils.toArray(".gallery-pictures img.scrub");

let mm = gsap.matchMedia();

// min-width is slightly above 64em to prevent overlap when changin screen size
mm.add("(min-width: calc(64em + .1px))", () => {
    gsap.set(photos, { autoAlpha: 0, scale: 1.5, yPercent: 150 });

    const animation = gsap.to(photos, {
        autoAlpha: 1, scale: 1, yPercent: 0, duration: 1, stagger: 1
    });

    ScrollTrigger.create({
        trigger: "#projects",
        start: "top top",
        end: "bottom bottom",
        pin: ".gallery-pictures",
        animation: animation,
        scrub: true
    });

    return () => {
        gsap.set(photos, { clearProps: true });
    }
});
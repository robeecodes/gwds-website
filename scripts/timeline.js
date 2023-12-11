const timelinePics = Array.from(document.querySelectorAll(".timeline > article picture"));

let mm = gsap.matchMedia();

// min-width is slightly above 64em to prevent overlap when changing screen size
mm.add("(min-width: calc(64em + .1px))", () => {

    ScrollTrigger.refresh();

    timelinePics.forEach((pic, i) => {
        // Change xPercent based on the picture being odd or even
        if (i % 2) {
            gsap.set(pic, { autoAlpha: 0, xPercent: 150 });
        } else {
            gsap.set(pic, { autoAlpha: 0, xPercent: -150 });
        }

        const animation = gsap.to(pic, {
            autoAlpha: 1, xPercent: 0, duration: 1
        });
    
        ScrollTrigger.create({
            trigger: pic,
            start: "top 80%",
            end: "top 50%",
            animation: animation,
            scrub: true
        });
    });

    return () => {
        timelinePics.forEach(pic => {
            gsap.set(pic, { clearProps: true });
        });
    }
})
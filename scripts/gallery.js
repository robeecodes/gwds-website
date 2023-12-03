// https://www.youtube.com/watch?v=CQHvWqYXI5s

let mm = gsap.matchMedia();

mm.add("(min-width: 64em)", () => {
    const photos = gsap.utils.toArray(".gallery-pictures img.scrub");

    gsap.set(photos, { autoAlpha: 0, scale: 2 });

    const animation = gsap.to(photos, {
        autoAlpha: 1, scale: 1, duration: 1, stagger: 1
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
        gsap.set(photos, { autoAlpha: 1, scale: 1 });
    }
});

document.querySelectorAll(".gallery-pictures img").forEach(pic => {
    const src = pic.src;

    const instance = basicLightbox.create(
        `
            <div class="modal">
                <img src="${src}">
            </div>
        `
    );

    pic.addEventListener("click", () => {
        instance.show();
    });
});
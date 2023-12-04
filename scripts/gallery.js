// https://www.youtube.com/watch?v=CQHvWqYXI5s

const photos = gsap.utils.toArray(".gallery-pictures img.scrub");

let mm = gsap.matchMedia();

mm.add("(min-width: 64em)", () => {
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

document.querySelectorAll(".gallery-pictures img").forEach(pic => {
    console.log(pic);
    let lightbox = document.querySelector("dialog.modal");

    pic.addEventListener("click", () => {
        lightbox.setAttribute("open", "true");
        lightbox.innerHTML = `<img src="${pic.src}">`;
        document.body.style.overflow = "hidden";
        document.body.style.height = "100vh";
    });

    lightbox.addEventListener("click", () => {
        lightbox.setAttribute("open", "false");
        document.body.style.overflow = "initial";
        document.body.style.height = "initial";
    });
});
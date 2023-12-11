// References
// Robbendebiene (2019) A way to count columns in a responsive grid Available from: https://stackoverflow.com/questions/55204205/a-way-to-count-columns-in-a-responsive-grid [Accessed 11 December 2023]

const gridPics = document.querySelectorAll('.grid > div picture');

// Store triggers so they can be killed on resize
const triggers = [];

// https://stackoverflow.com/questions/55204205/a-way-to-count-columns-in-a-responsive-grid
function computeGridCols() {
    let gridComputedStyle = window.getComputedStyle(document.querySelector(".grid"));
    return gridComputedStyle.getPropertyValue("grid-template-columns").split(" ").length;
}

let mmGrid = gsap.matchMedia();


// Move animation into function to trigger on resize
function gridAnimation() {
    let gridColumnCount = computeGridCols();

    triggers.forEach(trigger => {
        trigger.kill()
    });

    gridPics.forEach((pic, i) => {
        gsap.set(pic, { clearProps: true });
        gsap.set(pic, { autoAlpha: 0, yPercent: 50 });

        triggers.push(
            gsap.to(pic, {
                scrollTrigger: {
                    trigger: pic,
                    start: "top 100%",
                    end: "top 50%",
                    scrub: i % gridColumnCount
                },
                autoAlpha: 1,
                yPercent: 0
            }).scrollTrigger
        );
    });
}

// resizeEvent variable allows eventlistener to be removed from window
const resizeEvent = () => {
    gridAnimation();
};

// min-width is slightly above 64em to prevent overlap when changing screen size
mmGrid.add("(min-width: calc(64em + .1px))", () => {
    ScrollTrigger.refresh();

    gridAnimation();

    window.addEventListener("resize", resizeEvent);

    return () => {
        triggers.forEach(trigger => {
            trigger.kill()
        });
        window.removeEventListener("resize", resizeEvent);
        gridPics.forEach(pic => {
            gsap.set(pic, { clearProps: true });
        });
    }
});
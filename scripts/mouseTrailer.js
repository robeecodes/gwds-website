const trail = document.querySelector("#trailer");
const pics = document.querySelectorAll(`picture[role="button"]`);

window.addEventListener("mousemove", (e) => {
    let x = e.clientX - trail.offsetWidth / 2;
    let y = e.clientY - trail.offsetHeight / 2;
    trail.style.transform = `translate(${x}px, ${y}px)`;
});


// the trailer will expand to say "view" when hovering over an interactive picture
pics.forEach(pic => {
    pic.addEventListener("mouseover", () => {
        trail.classList.add("expanded");
    });
    pic.addEventListener("mouseout", () => {
        trail.classList.remove("expanded");
    });
})
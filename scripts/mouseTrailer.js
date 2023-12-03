const trail = document.querySelector("#trailer");
const pics = document.querySelectorAll(`img[role="button"]`);

document.addEventListener("mousemove", (e) => {
    let x = e.pageX - trail.offsetWidth / 2;
    let y = e.pageY - trail.offsetHeight / 2;
    trail.style.transform = `translate(${x}px, ${y}px)`;
});

pics.forEach(pic => {
    pic.addEventListener("mouseover", () => {
        trail.classList.add("expanded");
    });
    pic.addEventListener("mouseout", () => {
        trail.classList.remove("expanded");
    });
})
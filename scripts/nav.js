const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");


// Reset navbar styles if screen is resized
window.addEventListener("resize", () => {
    burger.setAttribute("aria-expanded", "false");
    burger.classList.remove("open");
    nav.classList.remove("open");
    document.body.removeAttribute("style");
});

// Create burger menu for mobile
burger.addEventListener("click", () => {
    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {
        document.body.style.overflow = "hidden";
        burger.setAttribute("aria-expanded", false);
    } else {
        burger.setAttribute("aria-expanded", true);
        document.body.style.overflow = "initial";
    };
});
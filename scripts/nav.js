const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

window.addEventListener("resize", () => {
    burger.setAttribute("aria-expanded", "false");
    burger.classList.remove("open");
    nav.classList.remove("open");
    document.body.removeAttribute("style");
});

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
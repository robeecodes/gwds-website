const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    if (nav.classList.contains("open")) {
        nav.style.left = "101%";

        setTimeout(() => {
            nav.style.display = "none";
        }, 500);

    } else {
        nav.style.display = "flex";

        setTimeout(() => {
            nav.style.left = "0";
        }, 5);
    };

    nav.classList.toggle("open");
});
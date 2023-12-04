document.querySelectorAll("img[role='button']").forEach(pic => {
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
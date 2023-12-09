document.querySelectorAll('picture[role="button"]').forEach(pic => {
    let lightbox = document.querySelector("dialog.modal");
    let src = pic.querySelector('img').currentSrc;

    pic.addEventListener("click", () => {
        lightbox.setAttribute("open", "true");
        lightbox.innerHTML = `<img src="${src}" /><p>Click anywhere to close</p>`;
        document.body.style.overflow = "hidden";
        document.body.style.height = "100vh";
    });

    lightbox.addEventListener("click", () => {
        lightbox.setAttribute("open", "false");
        document.body.style.overflow = "initial";
        document.body.style.height = "initial";
    });
});
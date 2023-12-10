document.querySelectorAll('picture[role="button"]').forEach(pic => {
    let lightbox = document.querySelector("dialog.modal");

    pic.addEventListener("click", () => {
        let src = pic.querySelector('img').currentSrc;

        // Fallback for Chrome/Edge - on the rare occasion currentSrc is empty, the lightbox will load up the default png file
        if (!src) {
            src = pic.querySelector('img').src;
        }

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
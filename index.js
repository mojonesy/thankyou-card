const card = document.querySelector(".card");
const openClose = document.querySelector(".open-close");

card.addEventListener("click", () => {
    const visible = openClose.getAttribute("data-visible");
    
    card.classList.toggle("card-open");
    if (visible === "false") {
        openClose.setAttribute("data-visible", true);
        openClose.innerHTML = "close";
    } else {
        openClose.setAttribute("data-visible", false);
        openClose.innerHTML = "open";
    }
});



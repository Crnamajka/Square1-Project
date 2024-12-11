document.addEventListener("DOMContentLoaded", function () {
    const filterTag = document.querySelector(".filter-tag");
    const filsection = document.querySelector("#fil");

    filterTag.addEventListener("click", () => {
        filsection.classList.toggle("active");
    });
});



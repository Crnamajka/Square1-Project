let active = false

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    const topNav = document.querySelector("#top-nav");

    menuToggle.addEventListener("click", () => {
   
        topNav.classList.toggle("active");
    });
});

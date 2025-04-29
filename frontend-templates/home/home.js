document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".account-toggle");
    const dropdownMenu = document.querySelector("#accountDropdown");

    dropdown.addEventListener("mouseenter", function () {
        dropdownMenu.style.display = "block";
        setTimeout(() => dropdownMenu.classList.add("show-dropdown"), 10);
    });

    dropdown.addEventListener("mouseleave", function () {
        setTimeout(() => {
            if (!dropdownMenu.matches(":hover")) {
                dropdownMenu.classList.remove("show-dropdown");
                setTimeout(() => dropdownMenu.style.display = "none", 300);
            }
        }, 200);
    });

    dropdownMenu.addEventListener("mouseenter", function () {
        dropdownMenu.classList.add("show-dropdown");
    });

    dropdownMenu.addEventListener("mouseleave", function () {
        dropdownMenu.classList.remove("show-dropdown");
        setTimeout(() => dropdownMenu.style.display = "none", 300);
    });
});

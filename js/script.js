// =========================
// MOBILE NAVIGATION
// =========================

console.log("JavaScript Connected Successfully");

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// TOGGLE MENU
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// CLOSE MENU AFTER CLICKING A LINK (MOBILE)
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
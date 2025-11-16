// Mobile nav toggle for Jekyll site
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("nav-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const openIcon = document.getElementById("nav-open-icon");
  const closeIcon = document.getElementById("nav-close-icon");

  if (!toggle || !mobileMenu) return;

  function openMenu() {
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("flex");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close Menu");
    if (openIcon) openIcon.classList.add("hidden");
    if (closeIcon) closeIcon.classList.remove("hidden");
    document.documentElement.classList.add("no-scroll");
  }

  function closeMenu() {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("flex");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open Menu");
    if (openIcon) openIcon.classList.remove("hidden");
    if (closeIcon) closeIcon.classList.add("hidden");
    document.documentElement.classList.remove("no-scroll");
  }

  toggle.addEventListener("click", function () {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    if (expanded) closeMenu();
    else openMenu();
  });

  // close when any mobile link clicked
  mobileMenu.addEventListener("click", function (e) {
    const link = e.target.closest("a");
    if (!link) return;
    // if link is internal, close menu. allow new tab for resume
    closeMenu();
  });

  // close on Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  // Prevent body scroll when mobile menu open
  const style = document.createElement("style");
  style.innerHTML = ".no-scroll { overflow: hidden; height: 100%; }";
  document.head.appendChild(style);
});

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("nav-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const openIcon = document.getElementById("nav-open-icon");
  const closeIcon = document.getElementById("nav-close-icon");

  if (!toggle || !mobileMenu) return;

  function openMenu() {
    mobileMenu.style.display = "flex";
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close Menu");
    if (openIcon) openIcon.style.display = "none";
    if (closeIcon) closeIcon.style.display = "block";
    document.documentElement.style.overflow = "hidden";
  }

  function closeMenu() {
    mobileMenu.style.display = "none";
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open Menu");
    if (openIcon) openIcon.style.display = "block";
    if (closeIcon) closeIcon.style.display = "none";
    document.documentElement.style.overflow = "";
  }

  toggle.addEventListener("click", function () {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    if (expanded) closeMenu();
    else openMenu();
  });

  mobileMenu.addEventListener("click", function (e) {
    const link = e.target.closest("a");
    if (!link) return;

    closeMenu();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });
});

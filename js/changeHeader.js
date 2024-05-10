const navPrimary = document.getElementsByClassName("nav-primary")[0];
const navSecondary = document.getElementsByClassName("nav-secondary")[0];
const changeHeader = () => {
  const positionScroll = document.documentElement.scrollTop;
  if (positionScroll >= sectionContact.clientHeight - 100) {
    if (!navPrimary.classList.contains("nav-primary-active")) {
      navPrimary.classList.add("nav-primary-active");
    }
    if (!navSecondary.classList.contains("nav-secondary-active")) {
      navSecondary.classList.add("nav-secondary-active");
    }
  } else {
    if (navPrimary.classList.contains("nav-primary-active")) {
      navPrimary.classList.remove("nav-primary-active");
    }
    if (navSecondary.classList.contains("nav-secondary-active")) {
      navSecondary.classList.remove("nav-secondary-active");
    }
  }
};
changeHeader()
window.addEventListener("scroll", changeHeader);

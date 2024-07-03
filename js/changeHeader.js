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
    if (navPrimary.classList.contains("open-menu")) {
      if (!navPrimary.classList.contains("nav-primary-active")) {
        navPrimary.classList.remove("nav-primary-active");
      }
      
    }
    if (!navPrimary.classList.contains("open-menu")) {
      if (navPrimary.classList.contains("nav-primary-active")) {
        navPrimary.classList.remove("nav-primary-active");
      }
      
    }

    if (navSecondary.classList.contains("nav-secondary-active")) {
      navSecondary.classList.remove("nav-secondary-active");
    }
  }
};
const openMenu = () => {
  const positionScroll = document.documentElement.scrollTop;
  if (!navPrimary.classList.contains("open-menu")) {
    navPrimary.classList.add("open-menu");
  } else if (navPrimary.classList.contains("open-menu")) {
    navPrimary.classList.remove("open-menu");
  }

  if (!navPrimary.classList.contains("nav-primary-active")) {
    navPrimary.classList.add("nav-primary-active");
  }
  else if (positionScroll < sectionContact.clientHeight - 100) {
    if (navPrimary.classList.contains("nav-primary-active")) {
      navPrimary.classList.remove("nav-primary-active");
    }
  }
};
changeHeader();
window.addEventListener("scroll", changeHeader);

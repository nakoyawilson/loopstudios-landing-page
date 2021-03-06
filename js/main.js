const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");
const headerLogo = document.querySelector(".header-logo");
const mobileMenuContainer = document.querySelector(".mobile");
const navLinks = document.querySelectorAll(".nav-link");
const title = document.querySelector(".title");

const displayMobileNav = () => {
  if (window.innerWidth < 752) {
    navigation.style.display = "block";
  }
};

displayMobileNav();

window.addEventListener("resize", displayMobileNav);

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  headerLogo.classList.toggle("mobile-menu");
  mobileMenuContainer.classList.toggle("mobile-menu");
  title.classList.toggle("mobile-title");
  if (navigation.classList.contains("open")) {
    menuButton.innerHTML = `<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z" fill="#FFF" fill-rule="evenodd"/></svg>`;
  } else {
    menuButton.innerHTML = `<svg width="24" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z"/></g></svg>`;
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    headerLogo.classList.remove("mobile-menu");
    mobileMenuContainer.classList.remove("mobile-menu");
    title.classList.toggle("mobile-title");
  });
});

const copyrightYear = document.querySelector(".copyright-year");
copyrightYear.innerHTML = new Date().getFullYear();

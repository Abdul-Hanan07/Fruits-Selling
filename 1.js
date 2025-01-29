
let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

// Navbar collapse toggle on mobile
let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse");

navbar.forEach(function (link) {
  link.addEventListener("click", function () {
    if (window.innerWidth < 992) {
      navCollapse.classList.remove("show"); 
    }
  });
});

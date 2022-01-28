const navSlide = () => {
  const mobil_menu_burger = document.querySelector(".mobil_menu_burger");
  const nav = document.querySelector(".nav_links");
  const navLinks = document.querySelectorAll(".nav_links li");
  mobil_menu_burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    // animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFads 0.5s ease forwards ${
          index / 5 + 0.5
        }s`;
      }
    });
    // animation of the burger
    mobil_menu_burger.classList.toggle("toggle");
  });
};

navSlide();

// My song settings :

var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");
icon.onclick = function () {
  if (mySong.paused) {
    mySong.play();
    mySong.volume = 0.1;
  } else {
    mySong.pause();
    mySong.volume = 0.1;
  }
};

// fade effect

const swup = new Swup();

// contact form js :
$(function () {
  $(".form-control").on("focus", function () {
    $(this).parents(".form-group").addClass("focused");
  });

  $(".form-control").on("blur", function () {
    $(this).parents(".form-group").removeClass("focused");
  });
});


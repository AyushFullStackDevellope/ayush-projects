// const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
// styleSwitcherToggle.addEventListener("click", () => {
//   document.querySelector(".style-switcher").classList.toggle("open");
// });

// // Hide style switcher on scroll
// window.addEventListener("scroll", () => {
//   if (document.querySelector(".style-switcher").classList.contains("open")) {
//     document.querySelector(".style-switcher").classList.remove("open");
//   }
// });
// // theme colors
// const alternateStyles = document.querySelectorAll(".alternate-style");
// function setActiveStyle(color) {
//   alternateStyles.forEach((style) => {
//     if (color === style.getAttribute("title")) {
//       style.removeAttribute("disabled");
//     } else {
//       style.setAttribute("disabled", "true");
//     }
//   });
// }

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  const icon = dayNight.querySelector("i");
  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
  const icon = dayNight.querySelector("i");
  if (document.body.classList.contains("dark")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const colorSwitcherIcon = document.querySelector('.color-switcher i');
  const colorOptions = document.querySelector('.color-options');
  const colorOptionsSpans = document.querySelectorAll('.color-option');

  // Toggle color options visibility
  colorSwitcherIcon.addEventListener('click', () => {
    colorOptions.style.display = colorOptions.style.display === 'block' ? 'none' : 'block';
  });

  // Change theme color
  colorOptionsSpans.forEach(span => {
    span.addEventListener('click', () => {
      const color = span.getAttribute('data-color');
      document.documentElement.style.setProperty('--theme-color', color);
      colorOptions.style.display = 'none';
    });
  });
});


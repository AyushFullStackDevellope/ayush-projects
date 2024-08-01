// -------------- Aside ------------------
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        allSection[j]?.classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();

      // Close the sidebar when clicking a navbar link
    }
  });
}

function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
}

// JavaScript for navigation functionality
const navLinks = document.querySelectorAll(".nav a");
const sections = document.querySelectorAll(".section");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    navLinks.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");

    const target = document.querySelector(this.getAttribute("href"));
    sections.forEach((section) => section.classList.remove("active"));
    target.classList.add("active");
  });
});
// JS For Toggle Button Functionality
function toggleContent(button) {
  const content = button.nextElementSibling;
  const allContents = document.querySelectorAll(".additional-box-content");

  allContents.forEach((boxContent) => {
    if (boxContent !== content) {
      boxContent.style.maxHeight = "0";
      boxContent.style.padding = "0 15px";
    }
  });

  if (content.style.maxHeight && content.style.maxHeight !== "0px") {
    content.style.maxHeight = "0";
    content.style.padding = "0 15px";
  } else {
    const contentHeight = content.scrollHeight + 20;
    const maxHeight = contentHeight + "px";
    content.style.maxHeight = maxHeight;
    content.style.padding = "15px";
  }
}

// function for search bar

// function filterStudents() {
//   const input = document.getElementById("searchInput").value.toLowerCase();
//   const portfolioItems = document.querySelectorAll(".portfolio-item");

//   portfolioItems.forEach((item) => {
//     const studentName = item.getAttribute("data-student").toLowerCase();
//     if (studentName.includes(input)) {
//       item.style.display = "block";
//     } else {
//       item.style.display = "none";
//     }
//   });
// }
function closeSlide() {
  // Replace with your logic to close the slide
  document.getElementById("slideContainer").style.display = "none";
}

function filterStudents() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const portfolioItems = document
    .getElementById("portfolioItems")
    .getElementsByClassName("portfolio-item");

  for (let i = 0; i < portfolioItems.length; i++) {
    const studentName = portfolioItems[i]
      .getAttribute("data-student")
      .toLowerCase();
    if (studentName.includes(searchInput)) {
      portfolioItems[i].style.display = "";
    } else {
      portfolioItems[i].style.display = "none";
    }
  }
}

// certificate search bar 


function togglePhase(phase) {
  // Toggle visibility of tables and icons based on the selected phase
  var tables = document.querySelectorAll(".phase-table");
  var icons = document.querySelectorAll(".phase-icons");
  var buttons = document.querySelectorAll(".dropdown-btn");
  var columns = document.querySelectorAll(".column");

  // Hide all tables and icons and reset buttons and columns
  tables.forEach(function (table) {
    table.style.display = "none";
  });
  icons.forEach(function (icon) {
    icon.style.display = "none";
  });
  buttons.forEach(function (button) {
    button.classList.remove("active");
  });
  columns.forEach(function (column) {
    column.classList.remove("active");
  });

  // Show the selected phase's table and icons
  var table = document.getElementById(phase + "-table");
  var icons = document.getElementById(phase + "-icons");

  if (table) {
    table.style.display = "block";
  }

  if (icons) {
    icons.style.display = "block";
  }

  // Activate the clicked button and column
  var button = document.querySelector(
    ".dropdown-btn[onclick=\"togglePhase('" + phase + "')\"]"
  );
  if (button) {
    button.classList.add("active");
    button.closest(".column").classList.add("active");
  }

  // Scroll to the icons section
  var iconsSection = document.getElementById(phase + "-icons");
  if (iconsSection) {
    iconsSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  fadeDuration: 600,
  imageFadeDuration: 600,
  alwaysShowNavOnTouchDevices: true,
  disableScrolling: true,
  fitImagesInViewport: true,
});

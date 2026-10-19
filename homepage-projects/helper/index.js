// Typing animation
var typed = new Typed(".typing", {
  strings: [
    " ",
    " ",
    "Full Stack Developer",
    " ",
    " ",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
// -------------- Aside ------------------
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

// Iterate over each nav item and add click event
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

// Remove the back-section class from all sections
function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

// Add the back-section class to a specific section
function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

// Display the target section and hide others
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

// Sidebar toggle functionality
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

// Toggle the sidebar open/close state
function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
}

// Handle click events on navigation links
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



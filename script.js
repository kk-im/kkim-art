// Info Section
let infoLink = document.querySelector(".info-link");
let infoLinkClose = document.querySelector(".info-link-overlay");
let infoOverlay = document.querySelector(".info-overlay");

infoLink.addEventListener("click",() => {
  infoOverlay.classList.toggle("hide-right")
})

infoLinkClose.addEventListener("click", () => {
  infoOverlay.classList.toggle("hide-right");
})

// projects
let projectsLink = document.querySelector(".projects-link");
let projectsLinkClose = document.querySelector(".projects-link-overlay");
let projectsOverlay = document.querySelector(".projects-overlay");

projectsLink.addEventListener("click", () => {
  projectsOverlay.classList.toggle("hide-left");
});

projectsLinkClose.addEventListener("click", () => {
  projectsOverlay.classList.toggle("hide-left");
});

// Contact
let contactLink = document.querySelector(".contact-link");
let contactLinkClose = document.querySelector(".contact-link-overlay");
let contactOverlay = document.querySelector(".contact-overlay");

contactLink.addEventListener("click", () => {
  contactOverlay.classList.toggle("hide-bottom");
});

contactLinkClose.addEventListener("click", () => {
  contactOverlay.classList.toggle("hide-bottom");
});

// Close button function
const close = function () {

}

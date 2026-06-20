// ===== Typing effect di terminal hero =====
const lines = [
  "Rifaldi Adriansyah",
  "Software Engineering Student",
  "Java · OOP · MySQL Enthusiast"
];

const typedLineEl = document.getElementById("typedLine");
let lineIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const current = lines[lineIndex];

  if (!deleting) {
    typedLineEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    typedLineEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      lineIndex = (lineIndex + 1) % lines.length;
    }
  }

  setTimeout(typeLoop, deleting ? 35 : 65);
}

if (typedLineEl) {
  typeLoop();
}

// ===== Active tab berdasarkan scroll posisi =====
const sections = document.querySelectorAll("section[id]");
const tabs = document.querySelectorAll(".tab");

function setActiveTab() {
  let current = sections[0]?.id;
  const scrollPos = window.scrollY + 120;

  sections.forEach((section) => {
    if (scrollPos >= section.offsetTop) {
      current = section.id;
    }
  });

  tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.getAttribute("href") === `#${current}`);
  });
}

window.addEventListener("scroll", setActiveTab);
window.addEventListener("load", setActiveTab);
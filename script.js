const roles = [
    "Full Stack Developer",
    "Java Developer",
    "AI / ML Enthusiast",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;

const typingElement = document.querySelector(".typing");

function typeEffect() {

    if (roleIndex >= roles.length) {
        roleIndex = 0;
    }

    currentRole = roles[roleIndex];

    if (!isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }

    } else {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex++;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();


const aboutSection = document.querySelector(".about");

window.addEventListener("scroll", () => {

    const sectionTop = aboutSection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;

    if(sectionTop < triggerPoint){
        aboutSection.classList.add("show");
    }

});
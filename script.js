// Button Animations
document.querySelectorAll("nav ul li a").forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.1)";
        button.style.transition = "transform 0.3s";
    });

    button.addEventListener("mouseout", () => {
        button.style.transform = "scale(1)";
    });
});

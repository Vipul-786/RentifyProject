window.onload = function () {
    const welcomeText = "Rentify";
    const welcomeScreen = document.getElementById("welcome-screen");
    const welcomeTextElement = document.getElementById("welcome-text");

    // Create a span for each letter and append to the welcome text element
    for (let char of welcomeText) {
        const span = document.createElement("span");
        span.classList.add("letter");
        span.textContent = char === " " ? "\u00A0" : char; // Non-breaking space for spaces
        welcomeTextElement.appendChild(span);
    }

    const letters = document.querySelectorAll(".letter");
    let delay = 0;

    // Animate each letter to drop into place
    letters.forEach((letter) => {
        setTimeout(() => {
            letter.style.opacity = "1";
            letter.style.transform = "translateY(0)"; // Move to final position
        }, delay);
        delay += 200; // 200ms delay between each letter
    });

    // Add the logo after all letters appear
    setTimeout(() => {
        const logo = document.createElement("img");
        logo.src = "rentify logo.png"; // Update to your actual file path
        logo.alt = "Rentify Logo";
        welcomeTextElement.appendChild(logo);

        // Apply the animation for the logo
        logo.style.opacity = "1"; // Ensure it stays visible
        logo.style.animation = "dropIn 1s ease-out forwards"; // Apply the drop-in animation
    }, delay);

    // Redirect to home.html after the animation and the 1-second delay for the logo
    setTimeout(() => {
        window.location.href = "login.html"; // Update with the actual path to your home.html
    }, delay + 3500); // Wait for letters + logo animation + 1-second delay
};
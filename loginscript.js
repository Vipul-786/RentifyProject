// Get references to DOM elements
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const rememberMeCheckbox = document.getElementById("rememberMe");
const togglePassword = document.getElementById("togglePassword");

// Load saved username if "Remember me" was checked previously
window.addEventListener("load", () => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
        usernameInput.value = savedUsername;
        rememberMeCheckbox.checked = true;
    }
});

// Toggle password visibility
togglePassword.addEventListener("click", () => {
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
    togglePassword.classList.toggle("bxs-show");
    togglePassword.classList.toggle("bxs-hide");
});

// Handle form submission
loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    // Save username if "Remember me" is checked
    if (rememberMeCheckbox.checked) {
        localStorage.setItem("username", username);
    } else {
        localStorage.removeItem("username");
    }

    // Redirect to home.html after successful login
    alert(`Welcome, ${username}! Redirecting to the home page...`);
    window.location.href = "1stpage.html";
});

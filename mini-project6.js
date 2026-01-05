const btn = document.querySelector("#toggletheme");
const body = document.body;
const THEME_KEY = "theme";

// Apply theme
function applyTheme(theme) {
    body.classList.toggle("dark", theme === "dark");
    body.classList.toggle("light", theme === "light");
    localStorage.setItem(THEME_KEY, theme);
}

// Get initial theme
function getInitialTheme() {
    return (
        localStorage.getItem(THEME_KEY) ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light")
    );
}

// Set initial theme on load
applyTheme(getInitialTheme());

// Toggle button click
btn.addEventListener("click", () => {
    const newTheme = body.classList.contains("dark") ? "light" : "dark";
    applyTheme(newTheme);
});

// Listen for system theme change
window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
        applyTheme(e.matches ? "dark" : "light");
    });

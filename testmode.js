function toggleMode() {
    const body = document.body;
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const button = document.getElementById("modeToggle");

    body.classList.toggle("dark-mode");
    header.classList.toggle("dark-mode");
    footer.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        button.textContent = "Switch to Light Mode";
    } else {
        button.textContent = "Switch to Dark Mode";
    }
}

// Interactive Navigation Menu
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            navLinks.forEach(link => link.classList.remove("active"));
            event.target.classList.add("active");
        });
    });
});

// Project Filtering
function filterProjects(category) {
    const projects = document.querySelectorAll(".project");
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Contact Form Validation
function validateForm() {
    const form = document.querySelector("form");
    const email = form.elements["email"].value;
    const message = form.elements["message"].value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (message.trim() === "") {
        alert("Please enter a message.");
        return false;
    }

    return true;
}

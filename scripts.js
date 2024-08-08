// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
});

// Interactive Navigation Menu
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            navLinks.forEach(link => link.classList.remove("active"));
            event.target.classList.add("active");
        });
    });

    // Load projects dynamically
    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.getElementById('projects-container');
            projectsContainer.innerHTML = '';
            data.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.classList.add('col-md-6', 'mb-4', 'project', project.category);
                projectElement.setAttribute('data-aos', 'fade-up');
                projectElement.innerHTML = `
                    <div class="card">
                        <img src="${project.image}" class="card-img-top" alt="${project.title} Screenshot">
                        <div class="card-body">
                            <h5 class="card-title">${project.title}</h5>
                            <p class="card-text">${project.description}</p>
                        </div>
                    </div>
                `;
                projectsContainer.appendChild(projectElement);
            });
            AOS.refresh();  // Refresh AOS after adding new elements
        })
        .catch(error => console.error('Error loading projects:', error));
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

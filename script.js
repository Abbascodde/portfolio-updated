document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu functionality
    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");
    const menuItems = document.querySelectorAll(".mobile-menu a");

    // Toggle mobile menu
    btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });

    // Close mobile menu when a link is clicked
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            menu.classList.add("hidden");
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
        if (!menu.contains(e.target) && !btn.contains(e.target) && !menu.classList.contains("hidden")) {
            menu.classList.add("hidden");
        }
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });

    // Simple form validation (if you add a contact form later)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add form submission logic
            console.log('Form submitted');
        });
    }

    // Add subtle animations
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '-50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});

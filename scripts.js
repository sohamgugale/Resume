// js/scripts.js

// Smooth Scrolling for Navigation Links (Optional)
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // If the link is to a different page, do not apply smooth scrolling
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70, // Adjust offset for fixed navbar
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Mobile Menu Animation and Auto-Close
document.addEventListener('DOMContentLoaded', function () {
    const navbarNav = document.getElementById('navbarNav');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Add close button to mobile menu
    function addCloseButton() {
        if (window.innerWidth <= 991.98) {
            // Check if close button already exists
            if (!navbarNav.querySelector('.navbar-close-btn')) {
                const closeBtn = document.createElement('button');
                closeBtn.className = 'navbar-close-btn';
                closeBtn.innerHTML = '&times;';
                closeBtn.setAttribute('aria-label', 'Close menu');
                navbarNav.appendChild(closeBtn);

                // Close menu when clicking the close button
                closeBtn.addEventListener('click', function () {
                    const bsCollapse = new bootstrap.Collapse(navbarNav, {
                        toggle: false
                    });
                    bsCollapse.hide();
                });
            }
        } else {
            // Remove close button on desktop
            const closeBtn = navbarNav.querySelector('.navbar-close-btn');
            if (closeBtn) {
                closeBtn.remove();
            }
        }
    }

    // Handle window resize
    window.addEventListener('resize', addCloseButton);
    addCloseButton();

    // Close menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Only close if it's a hash link (internal navigation)
            if (this.getAttribute('href').startsWith('#')) {
                // Close the mobile menu
                const bsCollapse = new bootstrap.Collapse(navbarNav, {
                    toggle: false
                });
                bsCollapse.hide();

                // Smooth scroll to section
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    e.preventDefault();

                    // Calculate offset for fixed navbar
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetSection.offsetTop - navbarHeight;

                    // Smooth scroll
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        if (window.innerWidth <= 991.98) {
            const isClickInsideNav = navbarNav.contains(e.target);
            const isClickOnToggler = navbarToggler.contains(e.target);
            const isMenuOpen = navbarNav.classList.contains('show');

            if (!isClickInsideNav && !isClickOnToggler && isMenuOpen) {
                const bsCollapse = new bootstrap.Collapse(navbarNav, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        }
    });

    // Handle ESC key to close menu
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && navbarNav.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarNav, {
                toggle: false
            });
            bsCollapse.hide();
        }
    });
});

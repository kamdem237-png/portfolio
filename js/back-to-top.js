// Back to Top Button
document.addEventListener('DOMContentLoaded', function () {
    const backToTopBtn = document.getElementById('backToTop');
    const accueilSection = document.getElementById('accueil');

    // Show/hide button based on scroll position
    function toggleBackToTopButton() {
        const scrollPosition = window.scrollY;
        const accueilSectionBottom = accueilSection.offsetTop + accueilSection.offsetHeight;

        if (scrollPosition > accueilSectionBottom) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }

    // Smooth scroll to top
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Event listeners
    window.addEventListener('scroll', toggleBackToTopButton);
    backToTopBtn.addEventListener('click', scrollToTop);

    // Initial check
    toggleBackToTopButton();

    // Handle keyboard navigation
    backToTopBtn.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            scrollToTop();
        }
    });
});

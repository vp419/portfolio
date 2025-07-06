
        function toggleMenu() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
        }
        // Animate skill bars on scroll
        window.addEventListener('scroll', () => {
            const skillItems = document.querySelectorAll('.skill-progress');
            skillItems.forEach(item => {
                const rect = item.getBoundingClientRect();
                if (rect.top >= 0 && rect.top <= window.innerHeight) {
                    item.style.width = item.style.width || item.getAttribute('style').match(/width: (\d+)%/)[1] + '%';
                }
            });
        });

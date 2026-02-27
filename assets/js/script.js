/* assets/js/script.js */
document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Check for saved theme
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlElement.classList.add('dark');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
            localStorage.setItem('theme', htmlElement.classList.contains('dark') ? 'dark' : 'light');
        });
    }

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            // Animate hamburger (can add more complex animations here)
        });
    }

    // Scroll Reveal Intersection Observer
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    // Navbar Blur on Scroll
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg', 'py-3');
            navbar.classList.remove('py-5');
        } else {
            navbar.classList.remove('shadow-lg', 'py-3');
            navbar.classList.add('py-5');
        }
    });

    // Project Filtering (Simple Logic)
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('bg-indigo-600', 'text-white'));
            btn.classList.add('bg-indigo-600', 'text-white');

            projectCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => card.style.opacity = '1', 10);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => card.style.display = 'none', 300);
                }
            });
        });
    });
});

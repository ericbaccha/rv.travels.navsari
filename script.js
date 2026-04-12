// 🚀 RV TRAVELS WEBSITE INTERACTIONS

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
    });
}

// Navbar Active Link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.menu a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

// Observe all fade elements
document.querySelectorAll('.fade').forEach(el => {
    observer.observe(el);
});

// Fleet Filter Functionality
const filterBtns = document.querySelectorAll('.filter-btn');
const fleetCards = document.querySelectorAll('.card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter cards
        const filter = btn.dataset.filter;
        
        fleetCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
                card.classList.add('fade');
                observer.observe(card);
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 8px 32px rgba(0,0,0,0.12)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
    }
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Close

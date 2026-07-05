document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Theme Toggle Logic
    const themeToggle = document.querySelector('#theme-toggle');
    const htmlElement = document.documentElement;
    const themeIcon = themeToggle.querySelector('i');

    themeToggle.addEventListener('click', () => {
        const isDark = htmlElement.getAttribute('data-theme') === 'dark';
        const newTheme = isDark ? 'light' : 'dark';
        htmlElement.setAttribute('data-theme', newTheme);
        themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
        localStorage.setItem('portfolio-theme', newTheme);
    });

    // Check for saved theme
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
        themeIcon.className = savedTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    }

    // 2. Sticky Navbar & Back to Top visibility
    const header = document.querySelector('#header');
    const backToTop = document.querySelector('#back-to-top');

    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
        backToTop.style.display = window.scrollY > 400 ? 'flex' : 'none';
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 3. Scroll Reveal Animation
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(el => revealObserver.observe(el));

    // 4. Simple Form Submission
    const contactForm = document.querySelector('#contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = contactForm.querySelector('button');
        const originalText = submitBtn.innerText;
        
        submitBtn.innerText = "Sending...";
        submitBtn.disabled = true;

        setTimeout(() => {
            alert('Thank you for your message, Sasvika will get back to you soon!');
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
            contactForm.reset();
        }, 1500);
    });
});
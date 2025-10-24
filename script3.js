const sr = ScrollReveal({
            distance: '60px',
            duration: 1000,
            delay: 200,
            easing: 'ease-out',
            reset: true
        });
        sr.reveal('.hero-content', { origin: 'top', delay: 200 });
        sr.reveal('.hero-buttons', { origin: 'bottom', delay: 400 });
        sr.reveal('.section-title', { origin: 'top', delay: 200 });
        sr.reveal('.about-content', { origin: 'bottom', delay: 300 });
        sr.reveal('.project-card', { origin: 'bottom', interval: 200 });
        sr.reveal('.contact-text', { origin: 'top', delay: 200 });
        sr.reveal('.contact-form', { origin: 'bottom', delay: 200 });
        sr.reveal('.social-links', { origin: 'bottom', delay: 100 });
        sr.reveal('.footer', { origin: 'bottom', delay: 100 });
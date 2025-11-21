const typed = new Typed('.typed-text',{
                strings: [
                    'Full-stack Web developer',
                    'Creative coder',
                    'UI/UX Lover',
                    'Web3 Enthusiast',
                    'Full-stack web developer. I design and build modern, responsive and user-friendly web applications'
                ],
                typeSpeed: 60,
                backSpeed: 40,
                backDelay: 1500,
                loop: false,
                onComplete: (self) => {
                    const el = document.querySelector('.typed-text');
                    el.textContent = 'Full-stack web developer. I design and build modern, responsive and user-friendly web applications';
                    el.style.color = '#ffd700'
                    el.style.fontWeight = '700'
                }
            });
// Enhanced Scroll Animations
const enhancedObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

// Animations for stats counter
const animateStats = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statElements = entry.target.querySelectorAll('.stat-number');
            
            statElements.forEach(el => {
                const targetValue = el.textContent;
                const hasPlus = targetValue.includes('+');
                const numericValue = parseFloat(targetValue.replace(/[^0-9.]/g, ''));
                let startValue = 0;
                
                el.textContent = startValue + (hasPlus ? '+' : '');
                
                const duration = 2000; // ms
                const frameDuration = 1000 / 60; // 60fps
                const totalFrames = Math.round(duration / frameDuration);
                let frame = 0;
                
                const animateCounter = () => {
                    frame++;
                    const progress = frame / totalFrames;
                    let currentValue = Math.round(easeOutQuart(progress) * numericValue);
                    
                    if (numericValue > 100) {
                        currentValue = Math.round(currentValue);
                    } else if (numericValue > 10) {
                        currentValue = Math.round(currentValue * 10) / 10;
                    }
                    
                    el.textContent = currentValue + (hasPlus ? '+' : '%');
                    
                    if (frame < totalFrames) {
                        requestAnimationFrame(animateCounter);
                    } else {
                        el.textContent = targetValue;
                    }
                };
                
                requestAnimationFrame(animateCounter);
            });
            
            observer.unobserve(entry.target);
        }
    });
};

// Easing function
function easeOutQuart(x) {
    return 1 - Math.pow(1 - x, 4);
}

// Enhanced animations for sections
const enhancedSectionAnimation = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let delay = 0;
            
            // Add visible class to the section
            entry.target.classList.add('visible');
            
            // Find all animatable elements within the section
            const animatableElements = entry.target.querySelectorAll('.skill-category, .project-card, .timeline-item, .contact-item');
            
            // Animate each element with a staggered delay
            animatableElements.forEach((element, index) => {
                setTimeout(() => {
                    element.style.opacity = '0';
                    element.style.transform = 'translateY(20px)';
                    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    
                    // Force reflow
                    void element.offsetWidth;
                    
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, index * 100 + delay);
            });
            
            observer.unobserve(entry.target);
        }
    });
};

// Initialize enhanced animations
document.addEventListener('DOMContentLoaded', () => {
    // Stats counter animation
    const statsObserver = new IntersectionObserver(animateStats, enhancedObserverOptions);
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    // Enhanced section animations
    const sectionObserver = new IntersectionObserver(enhancedSectionAnimation, enhancedObserverOptions);
    const sections = document.querySelectorAll('#skills, #projects, #experience, #contact, .cta-section');
    sections.forEach(section => {
        if (section) {
            sectionObserver.observe(section);
        }
    });

    // Parallax effect for the hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        });
    }

    // Smooth hover animations for buttons
    const buttons = document.querySelectorAll('.cta-button, .filter-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', (e) => {
            const x = e.clientX - button.getBoundingClientRect().left;
            const y = e.clientY - button.getBoundingClientRect().top;
            
            button.style.setProperty('--x', `${x}px`);
            button.style.setProperty('--y', `${y}px`);
        });
    });
}); 
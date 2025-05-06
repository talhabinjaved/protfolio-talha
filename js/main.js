// Custom Cursor - Adding null checks
document.addEventListener('DOMContentLoaded', () => {
    // Custom cursor functionality
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    if (cursorDot && cursorOutline) {
        document.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;
            
            cursorDot.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
            
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, {
                duration: 500,
                fill: 'forwards'
            });
        });
    }

    // Scroll Progress for right side vertical indicator
    const scrollProgress = document.querySelector('.scroll-progress');
    
    if (scrollProgress) {
        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            scrollProgress.style.height = `${scrolled}%`;
        });
    }

    // Typing Effect
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const text = typingText.textContent;
        typingText.textContent = '';
        
        let charIndex = 0;
        
        function type() {
            if (charIndex < text.length) {
                typingText.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(type, 100);
            }
        }
        
        // Start typing effect
        type();
    }

    // Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });

    // Project Filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');
                
                const filter = button.getAttribute('data-filter');
                
                projectCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                        setTimeout(() => card.classList.add('visible'), 100);
                    } else {
                        card.classList.remove('visible');
                        setTimeout(() => card.style.display = 'none', 300);
                    }
                });
            });
        });
    }

    // Smooth Scroll for Navigation Links
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

    // Load skills
    if (typeof skillsData !== 'undefined') {
        const languagesContainer = document.getElementById('languages');
        const aiToolsContainer = document.getElementById('ai-tools');
        const cloudDevopsContainer = document.getElementById('cloud-devops');

        if (languagesContainer && aiToolsContainer && cloudDevopsContainer) {
            // Icons mapping for skills
            const skillIcons = {
                // Languages & Frameworks
                'Python': 'fab fa-python',
                'JavaScript': 'fab fa-js',
                'TypeScript': 'fas fa-code',
                'React': 'fab fa-react',
                'Flask': 'fas fa-flask',
                'FastAPI': 'fas fa-bolt',
                'Django': 'fas fa-fire',
                'GraphQL': 'fas fa-project-diagram',
                // AI & Data
                'OpenAI': 'fas fa-brain',
                'LangChain': 'fas fa-link',
                'ElevenLabs': 'fas fa-microphone',
                'n8n': 'fas fa-code-branch',
                'RAG Pipelines': 'fas fa-stream',
                'Vector DBs': 'fas fa-database',
                'Pandas': 'fas fa-table',
                'Databricks': 'fas fa-chart-bar',
                // Cloud & DevOps
                'Azure': 'fab fa-microsoft',
                'AWS': 'fab fa-aws',
                'Docker': 'fab fa-docker',
                'Kubernetes': 'fas fa-dharmachakra',
                'CI/CD': 'fas fa-sync',
                'Git': 'fab fa-git-alt',
                'Azure Functions': 'fas fa-server',
                'Azure Pipelines': 'fas fa-stream'
            };

            // Clear containers first
            languagesContainer.innerHTML = '';
            aiToolsContainer.innerHTML = '';
            cloudDevopsContainer.innerHTML = '';

            skillsData.languages.forEach(skill => {
                const skillElement = document.createElement('div');
                skillElement.className = 'skill-item';
                const icon = skillIcons[skill] || 'fas fa-code';
                skillElement.innerHTML = `<i class="${icon}"></i>${skill}`;
                languagesContainer.appendChild(skillElement);
            });

            skillsData.aiTools.forEach(skill => {
                const skillElement = document.createElement('div');
                skillElement.className = 'skill-item';
                const icon = skillIcons[skill] || 'fas fa-robot';
                skillElement.innerHTML = `<i class="${icon}"></i>${skill}`;
                aiToolsContainer.appendChild(skillElement);
            });

            skillsData.cloudDevops.forEach(skill => {
                const skillElement = document.createElement('div');
                skillElement.className = 'skill-item';
                const icon = skillIcons[skill] || 'fas fa-cloud';
                skillElement.innerHTML = `<i class="${icon}"></i>${skill}`;
                cloudDevopsContainer.appendChild(skillElement);
            });
        }
    }

    // Load experience
    if (typeof experienceData !== 'undefined') {
        const timeline = document.getElementById('experience-timeline');
        if (timeline) {
            experienceData.forEach(exp => {
                const expElement = document.createElement('div');
                expElement.className = 'timeline-item';
                expElement.innerHTML = `
                    <h3>${exp.title}</h3>
                    <h4>${exp.company}</h4>
                    <p class="date">${exp.date}</p>
                    <ul>
                        ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                    </ul>
                `;
                timeline.appendChild(expElement);
            });
        }
    }

    // Load projects
    if (typeof projectsData !== 'undefined') {
        const projectsGrid = document.getElementById('projects-grid');
        if (projectsGrid) {
            projectsData.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.className = 'project-card';
                projectElement.setAttribute('data-category', project.category);
                projectElement.innerHTML = `
                    <div class="project-content">
                        <h3>${project.title}</h3>
                        <div class="project-tools">
                            ${project.tools.map(tool => `<span class="tool">${tool}</span>`).join('')}
                        </div>
                        <p>${project.description}</p>
                        <div class="project-impact">
                            <h4>Impact:</h4>
                            <ul>
                                ${project.impact.map(impact => `<li>${impact}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `;
                projectsGrid.appendChild(projectElement);
            });
        }
    }
}); 
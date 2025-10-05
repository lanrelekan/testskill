'use strict';

 // --- DATA MODULE ---
         const SKILLS = [
            { category: 'Frontend', iconClass: 'fas fa-layer-group', technologies: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Responsive Design'] },
            { category: 'Backend', iconClass: 'fas fa-code', technologies: ['Node.js', 'Express', 'APIs (REST/GraphQL)', 'PostgreSQL', 'MongoDB'] },
            { category: 'DevOps & Tools', iconClass: 'fas fa-terminal', technologies: ['Git/GitHub', 'Docker', 'AWS (S3/EC2)', 'CI/CD Pipelines', 'Testing (Jest)'] },
        ];

        const PROJECTS = [
            {
                title: 'Nexus Data Platform',
                description: 'A comprehensive, real-time data visualization and analysis dashboard built for scalability. Features custom charting and a robust serverless backend.',
                tags: ['JavaScript', 'D3.js', 'CSS Grid', 'REST API'],
                link: '#',
                type: 'Web Application',
            },
            {
                title: 'SecureAuth API Gateway',
                description: 'An authenticated microservice responsible for handling all user identity validation and token generation, optimized for high concurrency and low latency.',
                tags: ['Node.js', 'Express', 'JWT', 'PostgreSQL'],
                link: '#',
                type: 'Backend Service',
            },
            {
                title: 'Component Library (Vanilla)',
                description: 'A set of reusable, accessible UI components built using pure HTML, CSS, and JS, demonstrating strong architectural fundamentals.',
                tags: ['HTML', 'CSS', 'Vanilla JS', 'Accessibility'],
                link: '#',
                type: 'Developer Tool',
            },
        ];

        // --- RENDERING FUNCTIONS ---

        function renderSkills() {
            const container = document.getElementById('skills-container');
            if (!container) return;

            container.innerHTML = SKILLS.map(skill => `
                <div class="skill-block">
                    <i class="${skill.iconClass} fa-2x" style="color: var(--color-secondary); margin-bottom: 0.75rem;"></i>
                    <h3>${skill.category}</h3>
                    <div class="skill-tags">
                        ${skill.technologies.map(tech => `<span class="skill-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            `).join('');
        }

        function renderProjects() {
            const container = document.getElementById('projects-container');
            if (!container) return;

            container.innerHTML = PROJECTS.map(project => `
                <a href="${project.link}" class="project-card" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">
                    <div>
                        <h3>${project.title}</h3>
                        <p class="project-type">${project.type}</p>
                        <p class="project-description">${project.description}</p>
                    </div>
                    <div>
                        <div class="skill-tags" style="margin-bottom: 1rem;">
                            ${project.tags.map(tag => `<span class="skill-tag" style="background-color: var(--color-pill-bg);">${tag}</span>`).join('')}
                        </div>
                        <span class="project-link">
                            View Project <i class="fas fa-link" style="margin-left: 0.25rem;"></i>
                        </span>
                    </div>
                </a>
            `).join('');
        }
        
        // --- INITIALIZATION ---
        
        function initPortfolio() {
            // Render the dynamic sections
            renderSkills();
            renderProjects();
            
            // Set current year in the footer
            document.getElementById('current-year').textContent = new Date().getFullYear();
        }

        // Run the initialization function once the DOM is fully loaded
        document.addEventListener('DOMContentLoaded', initPortfolio);
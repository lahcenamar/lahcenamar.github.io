// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                document.querySelectorAll('.navbar-menu').forEach(menu => {
                    menu.style.display = 'none';
                });
            }
        }
    });
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nameInput = this.querySelector('input[placeholder="Votre nom"]');
        const emailInput = this.querySelector('input[placeholder="Votre email"]');
        const messageInput = this.querySelector('textarea[placeholder="Votre message"]');
        
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();
        
        // Validation
        if (!name || !email || !message) {
            alert('Veuillez remplir tous les champs du formulaire.');
            return;
        }
        
        if (!email.includes('@')) {
            alert('Veuillez entrer une adresse email valide.');
            return;
        }
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.style.cssText = `
            background: #27ae60;
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            margin-bottom: 20px;
            font-weight: 600;
            animation: fadeIn 0.3s ease;
        `;
        successMessage.textContent = `Merci ${name}! Votre message a été reçu. Je vous recontacterai bientôt à ${email}.`;
        
        this.insertBefore(successMessage, this.firstChild);
        
        // Clear form
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    });
}

// Add animation style
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards for animation
document.querySelectorAll('.experience-card, .education-card, .skill-group, .project-card, .language-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Active navbar link on scroll
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.navbar-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Add active nav link styling
const navStyle = document.createElement('style');
navStyle.textContent = `
    .navbar-menu a.active {
        color: #3498db !important;
        font-weight: 800;
    }
    
    .navbar-menu a.active::after {
        width: 100% !important;
        background: #3498db !important;
    }
`;
document.head.appendChild(navStyle);

console.log('CV Website Loaded Successfully');

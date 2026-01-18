// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.innerHTML = navMenu.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});

// Simple form submission (for contact page)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you! Your message has been sent. We will respond within 24 hours.');
        this.reset();
    });
}
// Function to replace all placeholders with images
function replacePlaceholdersWithImages() {
    const placeholders = document.querySelectorAll('.item-media-placeholder');
    
    placeholders.forEach(placeholder => {
        const menuItem = placeholder.closest('.menu-item');
        const itemName = menuItem.querySelector('.item-name').textContent.trim();
        
        // Create image filename from item name
        const filename = itemName.toLowerCase()
            .replace(/[^a-z0-9\s]/g, '')
            .replace(/\s+/g, '-')
            .replace(/[éèêë]/g, 'e')
            .replace(/[àâä]/g, 'a')
            .replace(/[îï]/g, 'i')
            .replace(/[ôö]/g, 'o')
            .replace(/[ûüù]/g, 'u')
            .replace(/ç/g, 'c') + '.jpg';
        
        // Create new image element
        const img = document.createElement('img');
        img.src = `images/${filename}`;
        img.alt = itemName;
        img.loading = 'lazy';
        
        // Replace placeholder with image
        const mediaContainer = placeholder.parentElement;
        mediaContainer.innerHTML = '';
        mediaContainer.appendChild(img);
        
        // Optional: Add zoom button
        const zoomBtn = document.createElement('button');
        zoomBtn.className = 'zoom-btn';
        zoomBtn.innerHTML = '<i class="fas fa-search-plus"></i> Zoom';
        zoomBtn.onclick = function() {
            openImageModal(this);
        };
        mediaContainer.appendChild(zoomBtn);
    });
}

// Call this function when page loads
document.addEventListener('DOMContentLoaded', replacePlaceholdersWithImages);

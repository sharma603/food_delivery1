// Enhanced Sidebar with FontAwesome Icons
// This script enhances the sidebar with colorful FontAwesome icons

frappe.ready(function() {
    // Wait for DOM to be ready
    setTimeout(function() {
        enhanceSidebarIcons();
    }, 1000);
});

function enhanceSidebarIcons() {
    // Icon mapping for different menu items
    const iconMapping = {
        'Home': 'fa-home',
        'POS Awesome': 'fa-store',
        'Account': 'fa-wallet',
        'Buying': 'fa-shopping-cart',
        'Selling': 'fa-tags',
        'Stock': 'fa-box',
        'Assets': 'fa-briefcase',
        'HR': 'fa-users',
        'Manufacturing': 'fa-building',
        'Quality': 'fa-shield-alt',
        'Projects': 'fa-folder',
        'Support': 'fa-headset',
        'Users': 'fa-users',
        'Website': 'fa-globe',
        'Payroll': 'fa-money-bill-wave',
        'CRM': 'fa-chart-pie'
    };

    // Find all navigation links in sidebar
    const navLinks = document.querySelectorAll('.sidebar .nav-link');
    
    navLinks.forEach(function(link) {
        const linkText = link.textContent.trim();
        const iconClass = iconMapping[linkText];
        
        if (iconClass) {
            // Remove existing icon if any
            const existingIcon = link.querySelector('.nav-icon, .fa, .fas, .far, .fab');
            if (existingIcon) {
                existingIcon.remove();
            }
            
            // Create new FontAwesome icon
            const icon = document.createElement('i');
            icon.className = `fas ${iconClass} nav-icon`;
            icon.style.marginRight = '12px';
            icon.style.fontSize = '16px';
            icon.style.transition = 'all 0.3s ease';
            
            // Insert icon at the beginning of the link
            link.insertBefore(icon, link.firstChild);
        }
    });

    // Add hover effects for icons
    navLinks.forEach(function(link) {
        link.addEventListener('mouseenter', function() {
            const icon = link.querySelector('.nav-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2)';
                icon.style.filter = 'drop-shadow(0 2px 4px rgba(255, 107, 53, 0.3))';
            }
        });
        
        link.addEventListener('mouseleave', function() {
            const icon = link.querySelector('.nav-icon');
            if (icon) {
                icon.style.transform = 'scale(1)';
                icon.style.filter = 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))';
            }
        });
    });

    // Add active state styling
    const activeLink = document.querySelector('.sidebar .nav-link.active');
    if (activeLink) {
        const activeIcon = activeLink.querySelector('.nav-icon');
        if (activeIcon) {
            activeIcon.style.color = '#f8f9fa';
            activeIcon.style.transform = 'scale(1.2)';
            activeIcon.style.filter = 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))';
        }
    }
}

// Re-run enhancement when new content is loaded
$(document).on('frappe:route-change', function() {
    setTimeout(function() {
        enhanceSidebarIcons();
    }, 500);
});

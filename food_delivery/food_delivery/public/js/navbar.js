frappe.ready(function() {
    // Remove existing ERPNext navbar with error handling
    const existingNavbar = document.querySelector('.navbar');
    if (existingNavbar) {
        existingNavbar.style.display = 'none';
    }

    // Create custom navbar
    const navbar = document.createElement('div');
    navbar.id = 'custom-navbar';
    navbar.innerHTML = `
        <div class="custom-navbar-container">
            <a href="/app" class="custom-brand">
                <img src="/assets/food_delivery/images/logo.jpg" class="custom-logo" alt="Food Delivery Logo">
                <span>HypeBridge</span>
            </a>
            <ul class="custom-nav-links">
                <li><a href="/app">Home</a></li>
                <li><a href="/app/food-delivery">Orders</a></li>
                <li><a href="/app/menu">Menu</a></li>
                <li><a href="/app/profile">Profile</a></li>
            </ul>
        </div>
    `;
    
    // Insert navbar at the beginning of body
    document.body.insertBefore(navbar, document.body.firstChild);
});

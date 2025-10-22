# Tasty Delivery Theme - Custom CSS Theme Guide

## 🎨 Theme Overview

**Theme Name:** Tasty Delivery  
**Version:** 1.0  
**Description:** Custom theme for food delivery application with modern header design  
**File:** `tasty-delivery-theme.css`

## 🚀 Theme Features

### **Custom Header Design**
- **Gradient Background:** Red to Orange gradient (#e74c3c to #f39c12)
- **Animated Logo:** Pulsing food icon with brand name
- **Interactive Navigation:** Hover effects and smooth transitions
- **Search Bar:** Integrated search with custom styling
- **Shopping Cart:** Cart icon with item count badge
- **User Avatar:** Profile picture with hover effects
- **Notifications:** Bell icon with notification count
- **Language Selector:** Dropdown for multiple languages

### **Theme Colors**
```css
:root {
    --theme-primary: #e74c3c;        /* Red - Appetite color */
    --theme-secondary: #f39c12;      /* Orange - Food color */
    --theme-accent: #27ae60;          /* Green - Fresh color */
    --theme-warning: #f1c40f;        /* Yellow - Caution color */
    --theme-info: #3498db;            /* Blue - Info color */
    --theme-dark: #2c3e50;            /* Dark Blue - Professional */
    --theme-light: #ecf0f1;           /* Light Gray - Background */
}
```

## 📱 Responsive Design

### **Desktop Header** (768px+)
- Full navigation menu
- Search bar
- All header actions visible
- Hover effects and animations

### **Mobile Header** (< 768px)
- Hamburger menu
- Collapsible navigation
- Touch-friendly buttons
- Optimized for mobile devices

## 🛠️ How to Use

### **1. Include the Theme**
The theme is already included in `hooks.py`:
```python
app_include_css = [
    "/assets/food_delivery/css/food_delivery.css",
    "/assets/food_delivery/css/tasty-delivery-theme.css"
]
```

### **2. Use the Custom Header**
Include the header template in your web pages:
```html
{% include 'food_delivery/templates/includes/custom_header.html' %}
```

### **3. Apply Theme Classes**
```html
<!-- Apply theme to any element -->
<div class="fd-theme-tasty-delivery">
    <!-- Your content here -->
</div>

<!-- Use theme colors -->
<div style="background-color: var(--theme-primary);">
    Primary color background
</div>
```

## 🎯 Header Components

### **Brand Logo**
```html
<a href="/" class="fd-brand-logo">
    <span class="logo-icon">🍽️</span>
    <span class="logo-text">Tasty Delivery</span>
    <span class="logo-subtitle">Fresh Food Fast</span>
</a>
```

### **Navigation Menu**
```html
<nav class="fd-nav-menu">
    <li class="active">
        <a href="/" data-icon="🏠">Home</a>
    </li>
    <li>
        <a href="/restaurants" data-icon="🍕">Restaurants</a>
    </li>
    <!-- More menu items -->
</nav>
```

### **Search Bar**
```html
<div class="fd-header-search">
    <input type="text" placeholder="Search restaurants, food..." id="header-search">
    <span class="search-icon">🔍</span>
</div>
```

### **Shopping Cart**
```html
<a href="/cart" class="fd-header-cart">
    <span class="cart-icon">🛒</span>
    <span>Cart</span>
    <span class="cart-count">2</span>
</a>
```

### **Notifications**
```html
<div class="fd-header-notification">
    <span class="notification-icon">🔔</span>
    <span class="notification-badge">3</span>
</div>
```

## 🎨 Customization Options

### **1. Change Theme Colors**
Edit the CSS variables:
```css
:root {
    --theme-primary: #your-color;        /* Change primary color */
    --theme-secondary: #your-color;      /* Change secondary color */
    --theme-accent: #your-color;         /* Change accent color */
}
```

### **2. Modify Header Background**
```css
.fd-custom-header {
    background: linear-gradient(135deg, #your-color1, #your-color2);
}
```

### **3. Customize Logo**
```html
<a href="/" class="fd-brand-logo">
    <span class="logo-icon">🍕</span>  <!-- Change icon -->
    <span class="logo-text">Your Brand</span>  <!-- Change text -->
    <span class="logo-subtitle">Your Tagline</span>  <!-- Change tagline -->
</a>
```

### **4. Add Custom Menu Items**
```html
<li>
    <a href="/your-page" data-icon="🎯">Your Page</a>
</li>
```

## 📱 Mobile Features

### **Hamburger Menu**
```html
<button class="mobile-menu-btn" onclick="toggleMobileMenu()">
    ☰
</button>
```

### **Mobile Navigation**
```html
<div class="fd-mobile-menu" id="mobile-menu">
    <ul>
        <li><a href="/">🏠 Home</a></li>
        <li><a href="/restaurants">🍕 Restaurants</a></li>
        <!-- More items -->
    </ul>
</div>
```

## 🔧 JavaScript Functions

### **Mobile Menu Toggle**
```javascript
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('active');
}
```

### **Search Functionality**
```javascript
document.getElementById('header-search').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const searchTerm = this.value;
        if (searchTerm.trim()) {
            window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
        }
    }
});
```

### **Language Selector**
```javascript
document.getElementById('language-selector').addEventListener('change', function() {
    const selectedLanguage = this.value;
    // Implement language change logic here
    console.log('Language changed to:', selectedLanguage);
});
```

## 🎭 Theme Variations

### **Fixed Header**
```html
<header class="fd-custom-header fd-header-fixed">
    <!-- Header content -->
</header>
```

### **Transparent Header**
```html
<header class="fd-custom-header fd-header-transparent">
    <!-- Header content -->
</header>
```

### **Large Shadow Header**
```html
<header class="fd-custom-header fd-header-shadow-lg">
    <!-- Header content -->
</header>
```

## 🚀 Integration with ERPNext

### **1. Override ERPNext Header**
The theme automatically overrides ERPNext's default header styling:
```css
.erpnext-app .navbar {
    background: var(--header-bg) !important;
    box-shadow: var(--header-shadow) !important;
}
```

### **2. Custom Brand Colors**
```css
.erpnext-app .navbar-brand {
    background: none !important;
    color: var(--brand-logo-color) !important;
}
```

### **3. Navigation Styling**
```css
.erpnext-app .navbar-nav .nav-link {
    color: var(--header-text) !important;
    font-weight: 500 !important;
}
```

## 📊 Performance Features

### **CSS Animations**
- Smooth transitions (0.3s ease)
- Hover effects
- Loading animations
- Pulse effects for logo

### **Responsive Images**
- Optimized for different screen sizes
- Lazy loading support
- WebP format support

### **Minimal JavaScript**
- Lightweight functions
- Event delegation
- Efficient DOM manipulation

## 🎨 Design Principles

1. **Food Theme:** Colors and icons related to food delivery
2. **Modern UI:** Clean, contemporary design
3. **User-Friendly:** Intuitive navigation and interactions
4. **Responsive:** Works on all devices
5. **Accessible:** Proper contrast and keyboard navigation

## 🔧 Maintenance

### **Regular Updates**
- Keep theme colors consistent
- Update icons and images
- Test on different devices
- Optimize performance

### **Browser Support**
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📝 Usage Examples

### **Basic Implementation**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Tasty Delivery</title>
    <link rel="stylesheet" href="/assets/food_delivery/css/tasty-delivery-theme.css">
</head>
<body>
    {% include 'food_delivery/templates/includes/custom_header.html' %}
    <!-- Your page content -->
</body>
</html>
```

### **Custom Page with Theme**
```html
<div class="fd-theme-tasty-delivery">
    <div class="fd-custom-header">
        <!-- Header content -->
    </div>
    <main>
        <!-- Page content -->
    </main>
</div>
```

## 🎯 Next Steps

1. **Test the theme** on different devices
2. **Customize colors** to match your brand
3. **Add custom menu items** for your app
4. **Implement search functionality**
5. **Add user authentication** features
6. **Create responsive layouts** for different pages

Your Tasty Delivery theme is now ready to use! It provides a modern, food-themed header design that will make your food delivery app stand out.

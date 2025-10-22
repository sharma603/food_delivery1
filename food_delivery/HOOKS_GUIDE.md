# How to Use hooks.py in Your Food Delivery App

## What is hooks.py?

The `hooks.py` file is the **central configuration file** for your ERPNext app. It tells ERPNext:
- How to load your app
- What customizations to apply
- Which files to include
- What events to listen for
- How to integrate with other parts of the system

## Current State of Your hooks.py

Your `hooks.py` currently has:
- ✅ **Basic app information** (name, title, publisher, etc.)
- ❌ **All customization options are commented out** (using #)
- ❌ **No active hooks or integrations**

## How to Use hooks.py - Practical Examples

### 1. 🎨 Adding Custom CSS and JavaScript

**Uncomment and modify these lines:**

```python
# Include custom CSS and JS files
app_include_css = "/assets/food_delivery/css/food_delivery.css"
app_include_js = "/assets/food_delivery/js/food_delivery.js"

# Include files for web templates (customer-facing)
web_include_css = "/assets/food_delivery/css/web.css"
web_include_js = "/assets/food_delivery/js/web.js"
```

**What this does:**
- Loads your custom styles and scripts in ERPNext
- `app_include_*` = loads in the main ERPNext interface
- `web_include_*` = loads on customer-facing web pages

### 2. 📄 Adding Custom JavaScript to DocTypes

**For your food delivery DocTypes:**

```python
# Add custom JavaScript to specific DocTypes
doctype_js = {
    "Food Order": "food_delivery/public/js/food_order.js",
    "Restaurant": "food_delivery/public/js/restaurant.js",
    "Menu Item": "food_delivery/public/js/menu_item.js"
}

# Add JavaScript to list views
doctype_list_js = {
    "Food Order": "food_delivery/public/js/food_order_list.js"
}
```

### 3. 🔔 Setting Up Document Events

**Listen to document changes:**

```python
doc_events = {
    "Food Order": {
        "on_update": "food_delivery.food_order.events.on_order_update",
        "on_submit": "food_delivery.food_order.events.on_order_submit",
        "on_cancel": "food_delivery.food_order.events.on_order_cancel"
    },
    "Menu Item": {
        "on_update": "food_delivery.menu_item.events.on_menu_update"
    }
}
```

**Example event handler:**
```python
# food_delivery/food_order/events.py
def on_order_submit(doc, method):
    """Called when a food order is submitted"""
    # Send notification to restaurant
    # Update inventory
    # Create delivery record
    pass
```

### 4. ⏰ Scheduled Tasks

**Set up automated tasks:**

```python
scheduler_events = {
    "daily": [
        "food_delivery.tasks.daily.daily_order_summary",
        "food_delivery.tasks.daily.update_restaurant_ratings"
    ],
    "hourly": [
        "food_delivery.tasks.hourly.check_delivery_status"
    ],
    "all": [
        "food_delivery.tasks.all.cleanup_old_orders"
    ]
}
```

### 5. 🔐 Custom Permissions

**Control who can access what:**

```python
has_permission = {
    "Food Order": "food_delivery.permissions.has_food_order_permission",
    "Restaurant": "food_delivery.permissions.has_restaurant_permission"
}

permission_query_conditions = {
    "Food Order": "food_delivery.permissions.get_food_order_conditions"
}
```

### 6. 🏠 Custom Home Pages

**Set different home pages for different roles:**

```python
role_home_page = {
    "Restaurant Manager": "food_delivery/restaurant_dashboard",
    "Delivery Driver": "food_delivery/driver_dashboard",
    "Customer": "food_delivery/customer_portal"
}
```

### 7. 🔧 Installation Hooks

**Run code when app is installed/uninstalled:**

```python
after_install = "food_delivery.install.after_install"
before_uninstall = "food_delivery.uninstall.before_uninstall"
```

**Example installation script:**
```python
# food_delivery/install.py
def after_install():
    """Called after app installation"""
    # Create default roles
    # Set up default settings
    # Create sample data
    pass
```

### 8. 🌐 Web Integration

**Generate web pages automatically:**

```python
website_generators = ["Restaurant", "Menu Item"]
```

**Add custom Jinja filters:**

```python
jinja = {
    "methods": "food_delivery.utils.jinja_methods",
    "filters": "food_delivery.utils.jinja_filters"
}
```

## Step-by-Step Implementation for Food Delivery App

### Step 1: Create the File Structure

First, create the necessary directories and files:

```bash
# Create directories
mkdir -p food_delivery/public/js
mkdir -p food_delivery/public/css
mkdir -p food_delivery/food_order
mkdir -p food_delivery/restaurant
mkdir -p food_delivery/tasks
mkdir -p food_delivery/permissions
mkdir -p food_delivery/utils
```

### Step 2: Update hooks.py

Here's a practical example for your food delivery app:

```python
app_name = "food_delivery"
app_title = "Food Delivery"
app_publisher = "Bijay Kumar Sharma"
app_description = "App for managing restaurant food orders and deliveries"
app_email = "sharmabijay603@gmail.com"
app_license = "mit"

# Include custom CSS and JavaScript
app_include_css = "/assets/food_delivery/css/food_delivery.css"
app_include_js = "/assets/food_delivery/js/food_delivery.js"

# Include files for web templates
web_include_css = "/assets/food_delivery/css/web.css"
web_include_js = "/assets/food_delivery/js/web.js"

# Add custom JavaScript to DocTypes
doctype_js = {
    "Food Order": "food_delivery/public/js/food_order.js",
    "Restaurant": "food_delivery/public/js/restaurant.js",
    "Menu Item": "food_delivery/public/js/menu_item.js"
}

# Document Events
doc_events = {
    "Food Order": {
        "on_submit": "food_delivery.food_order.events.on_order_submit",
        "on_cancel": "food_delivery.food_order.events.on_order_cancel"
    }
}

# Scheduled Tasks
scheduler_events = {
    "daily": [
        "food_delivery.tasks.daily.daily_order_summary"
    ],
    "hourly": [
        "food_delivery.tasks.hourly.check_delivery_status"
    ]
}

# Custom Permissions
has_permission = {
    "Food Order": "food_delivery.permissions.has_food_order_permission"
}

# Installation hooks
after_install = "food_delivery.install.after_install"

# Custom home pages for different roles
role_home_page = {
    "Restaurant Manager": "food_delivery/restaurant_dashboard",
    "Delivery Driver": "food_delivery/driver_dashboard"
}
```

### Step 3: Create Supporting Files

**Create the JavaScript file:**
```javascript
// food_delivery/public/js/food_order.js
frappe.ui.form.on('Food Order', {
    refresh: function(frm) {
        // Add custom buttons
        if (frm.doc.status === 'Pending') {
            frm.add_custom_button('Assign Driver', function() {
                // Custom logic
            });
        }
    },
    
    customer: function(frm) {
        // Auto-fill delivery address
        if (frm.doc.customer) {
            frappe.call({
                method: 'food_delivery.food_order.get_customer_address',
                args: {
                    customer: frm.doc.customer
                },
                callback: function(r) {
                    if (r.message) {
                        frm.set_value('delivery_address', r.message);
                    }
                }
            });
        }
    }
});
```

**Create the event handler:**
```python
# food_delivery/food_order/events.py
import frappe

def on_order_submit(doc, method):
    """Called when a food order is submitted"""
    # Send notification to restaurant
    frappe.publish_realtime('food_order_submitted', {
        'order_id': doc.name,
        'restaurant': doc.restaurant,
        'customer': doc.customer
    })
    
    # Create delivery record
    delivery = frappe.get_doc({
        'doctype': 'Delivery',
        'food_order': doc.name,
        'customer': doc.customer,
        'delivery_address': doc.delivery_address,
        'status': 'Pending'
    })
    delivery.insert()
```

**Create the task file:**
```python
# food_delivery/tasks/daily.py
import frappe

def daily_order_summary():
    """Generate daily order summary"""
    # Get orders from yesterday
    orders = frappe.get_all('Food Order', 
        filters={'creation': ['>=', frappe.utils.add_days(frappe.utils.nowdate(), -1)]},
        fields=['name', 'total_amount', 'status']
    )
    
    # Send summary email
    frappe.sendmail(
        recipients=['admin@fooddelivery.com'],
        subject='Daily Order Summary',
        message=f'Total orders: {len(orders)}'
    )
```

## Common Use Cases for Food Delivery App

### 1. **Order Processing Automation**
```python
doc_events = {
    "Food Order": {
        "on_submit": "food_delivery.events.notify_restaurant",
        "on_update": "food_delivery.events.update_delivery_status"
    }
}
```

### 2. **Real-time Notifications**
```python
# In your JavaScript
frappe.publish_realtime('order_update', {
    'order_id': order_id,
    'status': 'Preparing'
});
```

### 3. **Custom Dashboards**
```python
role_home_page = {
    "Restaurant Manager": "food_delivery/restaurant_dashboard",
    "Delivery Driver": "food_delivery/driver_dashboard"
}
```

### 4. **Automated Tasks**
```python
scheduler_events = {
    "hourly": [
        "food_delivery.tasks.check_delivery_status",
        "food_delivery.tasks.update_order_status"
    ]
}
```

## Testing Your Hooks

### 1. **Clear Cache After Changes**
```bash
bench clear-cache
bench restart
```

### 2. **Check Console for Errors**
```bash
bench --site your-site console
```

### 3. **Test Document Events**
- Create/update documents
- Check if events are triggered
- Look at server logs

## Best Practices

1. **Start Simple**: Begin with basic hooks and gradually add complexity
2. **Test Thoroughly**: Always test hooks in development before production
3. **Document Changes**: Keep track of what each hook does
4. **Use Error Handling**: Wrap your hook functions in try-catch blocks
5. **Performance**: Avoid heavy operations in hooks that run frequently

## Next Steps

1. **Uncomment the hooks you need** in your `hooks.py`
2. **Create the supporting files** (JavaScript, Python modules)
3. **Test each hook** individually
4. **Build up complexity** gradually

Your `hooks.py` is the control center of your app - use it wisely to create a powerful food delivery system!

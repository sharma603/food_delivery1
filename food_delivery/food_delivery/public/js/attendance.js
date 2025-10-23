// Custom JavaScript for Attendance doctype
// Handles the "On Duty" custom status

frappe.ui.form.on('Attendance', {
    refresh: function(frm) {
        // Override status options to include "On Duty"
        frm.set_df_property('status', 'options', [
            'Present',
            'Absent',
            'Half Day', 
            'Work From Home',
            'Leave',
            'On Duty'
        ].join('\n'));
        
        // Force refresh the field to update dropdown
        frm.refresh_field('status');
        
        // Add custom styling for "On Duty" status
        if (frm.doc.status === 'On Duty') {
            frm.set_df_property('status', 'description', 
                'Employee is actively working on delivery/field duties');
        }
        
        // Add custom CSS for "On Duty" status
        setTimeout(function() {
            $('[data-fieldname="status"] .dropdown-menu .dropdown-item').each(function() {
                if ($(this).text().trim() === 'On Duty') {
                    $(this).addClass('on-duty-status');
                }
            });
        }, 100);
    },
    
    status: function(frm) {
        // Custom handling when status changes to "On Duty"
        if (frm.doc.status === 'On Duty') {
            // Show additional fields or validations for On Duty status
            frm.set_df_property('status', 'description', 
                'Employee is actively working on delivery/field duties');
            
            // You can add more custom logic here
            // For example, auto-fill certain fields or show warnings
        }
    }
});

// Add custom CSS for "On Duty" status
frappe.ready(function() {
    // Add custom styling for On Duty status in lists and forms
    $('<style>')
        .prop('type', 'text/css')
        .html(`
            .status-indicator.status-on-duty {
                background-color: #28a745 !important;
                color: white !important;
            }
            .status-indicator.status-on-duty:before {
                content: "🚚";
                margin-right: 5px;
            }
        `)
        .appendTo('head');
});

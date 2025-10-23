import frappe
from erpnext.hr.doctype.attendance.attendance import Attendance

class CustomAttendance(Attendance):
    def validate(self):
        # Add your custom status validation before calling super()
        allowed_status = [
            "Present",
            "Absent",
            "Half Day",
            "Work From Home",
            "Leave",
            "On Duty"  # ✅ Custom status for delivery staff
        ]

        if self.status not in allowed_status:
            frappe.throw(f"Invalid Status: {self.status}. Allowed statuses are: {', '.join(allowed_status)}")

        # Call original validation after custom validation
        super().validate()

    @staticmethod
    def get_status_options():
        """Override the status options to include 'On Duty'"""
        return [
            "Present",
            "Absent", 
            "Half Day",
            "Work From Home",
            "Leave",
            "On Duty"  # ✅ Custom status for delivery staff
        ]

# Standalone function for method override
def get_status_options():
    """Override the status options to include 'On Duty'"""
    return [
        "Present",
        "Absent", 
        "Half Day",
        "Work From Home",
        "Leave",
        "On Duty"  # ✅ Custom status for delivery staff
    ]

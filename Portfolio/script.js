
function toggleMenu() {
    var menu = document.getElementById("nav-menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Event listener for toggling menu visibility when the bars icon is clicked
document.getElementById("bars-icon").addEventListener("click", function() {
    toggleMenu();
});

// Sample JavaScript for handling form submission

// Function to validate and submit the contact form
function submitForm() {
    // Add form validation logic here
    
    // For example, you can access form elements by their IDs
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Perform form validation checks

    // Assuming the form is valid, you might submit it via AJAX or handle it according to your backend setup
    // This is a basic example of submitting the form (not using AJAX)
    alert("Form submitted!\nName: " + name + "\nEmail: " + email + "\nMessage: " + message);
}

// Event listener for form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    submitForm(); // Call the submitForm function for handling form submission
});

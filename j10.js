<script>
    // Wait until the DOM is fully loaded
    window.onload = function () {
        // Select the form by its class name
        const form = document.querySelector('.contact-form');

        // Ensure the form exists to avoid errors
        if (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();  // Prevent default form submission

                // Display the alert message
                alert('Your form is submitted');

                // Clear the form fields after submission
                form.reset();
            });
        } else {
            console.error('Form not found. Make sure you are using the correct class name.');
        }
    };
</script>

document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get email input and error elements
    const emailInput = document.getElementById("email");
    const errorMessage = document.getElementById("error-message");

    // Simple email validation regex pattern
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Check if the email is valid
    if (!emailInput.value.match(emailPattern)) {
        // If valid - show error message
        errorMessage.style.display = "block";
        emailInput.style.border = "2px solid hsl(0, 59%, 61%)"; // Red border when email is invalid
    } else {
        // If invalid - hide error message
        errorMessage.style.display = "none";
        emailInput.style.border = "1px solid hsla(0, 36%, 70%, 0.588)"; // Reset border to original color
    }
  });
  
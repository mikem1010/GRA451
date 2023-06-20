// Add this jQuery code to your main.js file or a separate JavaScript file
$(document).ready(function() {
  // Show the pop-up when the page loads
  $("#popup-container").show();

  // Close the pop-up when the "Close" button is clicked
  $("#close-button").click(function() {
    $("#popup-container").hide();
  });
});

// Add this JavaScript code to your main.js file or a separate JavaScript file
$(document).ready(function() {
  // Handle form submission
  $("#contact-form").submit(function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the form data
    var firstName = $("#first-name").val();
    var lastName = $("#last-name").val();
    var email = $("#email").val();

    // Perform validation if needed
    // ...

    // Perform form processing or send data to the server
    // ...

    // Reset the form fields after submission
    $("#contact-form")[0].reset();
  });
});

// Add this JavaScript/jQuery code to handle the toggle functionality
$(document).ready(function() {
  $(".hamburger-menu").click(function() {
    $("nav ul").slideToggle();
  });
});

$(document).ready(function() {
  // Open the pop-up when the page loads
  $("#popup-container").fadeIn();

  // Close the pop-up when the "Close" button is clicked
  $("#close-button").click(function() {
    $("#popup-container").fadeOut();
  });

  // Form submission event handler
  $("#contact-form").submit(function(event) {
    event.preventDefault();

    // Get the form values
    var firstName = $("#first-name").val();
    var lastName = $("#last-name").val();
    var email = $("#email").val();

    // Remove previous validation messages
    $(".validation-message").remove();

    // Perform validation checks
    if (!firstName) {
      $("<span class='validation-message'>Please enter your first name.</span>").insertAfter("#first-name");
      return;
    }

    // Rest of the validation checks...

    // If all validations pass, submit the form
    this.submit();
  });
});

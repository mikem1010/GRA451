// Add this jQuery code to your main.js file or a separate JavaScript file
$(document).ready(function() {
  // Open the pop-up when the page loads
  $("#popup-container").fadeIn();

  // Close the pop-up when the "Close" button is clicked
  $("#close-button").click(function() {
    $("#popup-container").fadeOut();
  });
});


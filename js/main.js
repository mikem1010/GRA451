// Update the jQuery code in your main.js file or a separate JavaScript file
$(document).ready(function() {
  // Open the pop-up when the page loads
  $("#popup-container").fadeIn();
  $("#popup-content").delay(500).fadeIn();

  // Close the pop-up when the "Close" button is clicked
  $("#close-button").click(function() {
    $("#popup-content").fadeOut(function() {
      $("#popup-container").fadeOut();
    });
  });
});



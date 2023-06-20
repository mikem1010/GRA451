// Add this jQuery code to your main.js file or a separate JavaScript file
$(document).ready(function() {
  // Show the pop-up when the page loads
  $("#popup-container").show();

  // Close the pop-up when the "Close" button is clicked
  $("#close-button").click(function() {
    $("#popup-container").hide();
  });
});



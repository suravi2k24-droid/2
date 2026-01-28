// disable-right-click.js

// Disable right-click functionality
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    showPopup(); // Show popup when right-click is attempted
  });
  
  // Function to show the popup
  function showPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
  }
  
  // Function to close the popup
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
  }
  
AOS.init();

// Find the button on the page
const darkModeToggle = document.getElementById('darkModeToggle');

// Listen for button clicks
darkModeToggle.addEventListener('click', function() {
  // Toggle the "dark-mode" class on the body
  document.body.classList.toggle('dark-mode');
});




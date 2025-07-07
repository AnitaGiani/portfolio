document.addEventListener('DOMContentLoaded', function () {
  const darkModeToggle = document.getElementById('darkModeToggle');

  if (darkModeToggle) {
    darkModeToggle.addEventListener('change', function() {
      document.body.classList.toggle('dark-mode');
    });
  }

  if (typeof AOS !== 'undefined') {
    AOS.init();
  }
});

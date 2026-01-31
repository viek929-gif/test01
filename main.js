document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  // Theme Toggle Logic
  if (themeToggle) {
    // Check for saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      body.setAttribute('data-theme', 'dark');
      themeToggle.checked = true;
    }

    themeToggle.addEventListener('change', () => {
      if (themeToggle.checked) {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(loginForm);
      const data = Object.fromEntries(formData.entries());

      console.log('Login Attempt:', data);
      
      // Here you would typically send the data to a server
      alert(`Login attempted with ID: ${data.username}`);
    });
  }
});

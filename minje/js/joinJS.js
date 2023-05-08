const passwordInput = document.getElementById('password-input');
const confirmPasswordInput = document.getElementById('confirm-password-input');
const passwordToggle = document.getElementById('password-toggle');

passwordToggle.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    confirmPasswordInput.type = 'text';
    passwordToggle.classList.remove('fa-eye-slash');
    passwordToggle.classList.add('fa-eye');
  } else {
    passwordInput.type = 'password';
    confirmPasswordInput.type = 'password';
  }
});
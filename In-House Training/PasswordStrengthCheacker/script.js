function checkPasswordStrength() {
  const password = document.getElementById('password').value;
  const bars = [bar1, bar2, bar3, bar4];
  const text = document.getElementById('strength-text');

  let strength = 0;

  if (password.length >= 6) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[@$!%*?&]/.test(password)) strength++;

  // Reset bars
  bars.forEach(bar => bar.style.background = '#ddd');

  if (strength === 0) {
    text.textContent = '';
    return;
  }

  const colors = ['red', 'orange', 'yellow', 'green'];
  for (let i = 0; i < strength; i++) {
    bars[i].style.background = colors[strength - 1];
  }

  const labels = ['Weak', 'Weak', 'Medium', 'Strong'];
  text.textContent = labels[strength - 1];
  text.style.color = colors[strength - 1];
}

const codes = document.querySelectorAll('.code');
codes[0].focus();

// Add event listeners in each code
codes.forEach((code, index) => {
  code.addEventListener('keydown', (event) => {
    if (event.key >= 0 && event.key <= 9) {
      // Prevents weird issues
      codes[index].value = '';

      // Move cursor to next input
      setTimeout(() => codes[index + 1].focus(), 1);
    } else if (event.key === 'Backspace') {
      setTimeout(() => codes[index - 1].focus(), 1);
    }
  });
});

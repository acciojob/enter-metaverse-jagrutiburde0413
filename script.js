document.addEventListener('DOMContentLoaded', function() {
  const statusElement = document.getElementById('status');
  const enterBtn = document.getElementById('enterBtn');

  enterBtn.addEventListener('click', function() {
    const h1 = document.createElement('h1');
    h1.textContent = 'Entered Metaverse';
    statusElement.parentNode.replaceChild(h1, statusElement);
  });
});

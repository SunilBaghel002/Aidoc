const animatedText = document.querySelector('.animated-text');

function startAnimation() {
  animatedText.style.animationPlayState = 'running';
}

function pauseAnimation() {
  animatedText.style.animationPlayState = 'paused';
}
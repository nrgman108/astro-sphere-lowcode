function animate() {
  const animateElements = document.querySelectorAll('.animate')
  const heroText = document.querySelector('.hero-text')

  animateElements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('show')
    }, index * 150)
  });

  // Hero текст анимируем отдельно (только opacity)
  if (heroText) {
    setTimeout(() => {
      heroText.classList.add('show')
    }, 300)
  }
}

document.addEventListener("DOMContentLoaded", animate)
document.addEventListener("astro:after-swap", animate)
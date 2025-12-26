function animate() {
  const animateElements = document.querySelectorAll('.animate')
  const heroContent = document.querySelector('.hero-content')

  animateElements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('show')
    }, index * 150)
  });

  // Hero контент анимируем отдельно
  if (heroContent) {
    setTimeout(() => {
      heroContent.classList.add('show')
    }, 150)
  }
}

document.addEventListener("DOMContentLoaded", animate)
document.addEventListener("astro:after-swap", animate)
function animate() {
  const animateElements = document.querySelectorAll('.animate')

  animateElements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('show')
      // После завершения transition добавляем класс, который убирает transition на transform
      setTimeout(() => {
        element.classList.add('animated-done')
      }, 1000) // 1s = длительность transition
    }, index * 150)
  });
}

document.addEventListener("DOMContentLoaded", animate)
document.addEventListener("astro:after-swap", animate)
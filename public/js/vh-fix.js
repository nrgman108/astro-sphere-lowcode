// Фикс для mobile viewport height
// Вычисляем реальную высоту viewport один раз и фиксируем её
function setVH() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Устанавливаем при загрузке
setVH();

// НЕ обновляем при resize — это ключевой момент!
// Высота фиксируется один раз, чтобы избежать скачков при скролле

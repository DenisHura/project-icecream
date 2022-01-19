const modal = document.querySelector('dialog')
const closeBtn = document.querySelector('.js-close-modal');

closeBtn.onclick = () => {
  // Нативный метод close позволят закрыть окно   
  modal.close();
}

// Отслеживаю клик вне модального окна
document.onclick = (e) => {
  // Идеи поиск по элементам выше и если не находим контент или саму кнопку которая открывает окно - то значит клик вне модального окна и мы его нативно закрываем   
  if(!e.target.closest('.modal__content') &&   !e.target.closest('button')) {
    modal.close();
  }
}



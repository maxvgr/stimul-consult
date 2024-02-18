const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.querySelector('.consult__tofiz-img--up');
    if (entry.isIntersecting) {
      square.classList.add('animation');
	  return; // если класс добавлен, продолжать уже не надо
    }
    // перемещение завершено, теперь надо удалить класс
    square.classList.remove('animation');
  });
});
observer.observe(document.querySelector('.consult__tofiz-img'));

const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.querySelector('.consult__tofiz-img--middle');
    if (entry.isIntersecting) {
      square.classList.add('animation');
	  return; // если класс добавлен, продолжать уже не надо
    }
    // перемещение завершено, теперь надо удалить класс
    square.classList.remove('animation');
  });
});
observer1.observe(document.querySelector('.consult__tofiz-img'));

const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.querySelector('.consult__tofiz-img--bottom');
    if (entry.isIntersecting) {
      square.classList.add('animation');
	  return; // если класс добавлен, продолжать уже не надо
    }
    // перемещение завершено, теперь надо удалить класс
    square.classList.remove('animation');
  });
});
observer2.observe(document.querySelector('.consult__tofiz-img'));

const observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.querySelector('.consult__toorg-img--down');
    if (entry.isIntersecting) {
      square.classList.add('animation');
	  return; // если класс добавлен, продолжать уже не надо
    }
    // перемещение завершено, теперь надо удалить класс
    square.classList.remove('animation');
  });
});
observer3.observe(document.querySelector('.consult__toorg-img'));
export const taskEle = document.getElementById('task');

export const taskHandler = {
  active() {
    taskEle.classList.add('active');
  },
  nonActive() {
    taskEle.classList.remove('active');
  },
};

export const documentHandler = {
  add() {
    const layoutEle = document.getElementById('layout');
    layoutEle.addEventListener('click', calendarHandler.nonActive);
  },
  remove() {
    const layoutEle = document.getElementById('layout');
    layoutEle.removeEventListener('click', calendarHandler.nonActive);
  },
};

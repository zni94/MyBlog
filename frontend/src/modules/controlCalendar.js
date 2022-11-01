export const calendarEle = document.getElementsByClassName('react-calendar')[0];

export const calendarHandler = {
  active() {
    calendarEle.classList.add('active');
  },
  nonActive() {
    calendarEle.classList.remove('active');
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

const calendarHandler = {
  active() {
    const calendarEle = document.getElementsByClassName('react-calendar')[0];
    calendarEle.classList.add('active');
  },
  nonActive() {
    const calendarEle = document.getElementsByClassName('react-calendar')[0];
    calendarEle.classList.remove('active');
  },
};

const documentHandler = {
  add() {
    const layoutEle = document.getElementById('layout');
    layoutEle.addEventListener('click', calendarHandler.nonActive);
  },
  remove() {
    const layoutEle = document.getElementById('layout');
    layoutEle.removeEventListener('click', calendarHandler.nonActive);
  },
};

export const showCalendar = () => {
  calendarHandler.active();
  documentHandler.add();
};

export const hideCalendar = () => {
  calendarHandler.nonActive();
  documentHandler.remove();
};

export const calendarClickEvent = () => {
  const calendarEle = document.getElementsByClassName('react-calendar')[0];
  if (!calendarEle.classList.contains('active')) {
    showCalendar();
  } else {
    hideCalendar();
  }
};

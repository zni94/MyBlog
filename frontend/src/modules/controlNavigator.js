import { items } from '../store/src/fileNavigator';

const taskHandler = {
  active() {
    const taskEle = document.getElementById('task');
    taskEle.classList.add('active');
  },
  nonActive() {
    const taskEle = document.getElementById('task');
    taskEle.classList.remove('active');
  },
};

const documentHandler = {
  add() {
    const layoutEle = document.getElementById('layout');
    layoutEle.addEventListener('click', taskHandler.nonActive);
  },
  remove() {
    const layoutEle = document.getElementById('layout');
    layoutEle.removeEventListener('click', taskHandler.nonActive);
  },
};

export const showTask = () => {
  taskHandler.active();
  documentHandler.add();
};

export const hideTask = () => {
  taskHandler.nonActive();
  documentHandler.remove();
};

export const taskClickEvent = () => {
  const taskEle = document.getElementById('task');
  if (!taskEle.classList.contains('active')) {
    showTask();
  } else {
    hideTask();
  }
};

export const resetInput = (setTaskList) => {
  const inputEle = document.getElementById('searchArea');
  inputEle.value = '';

  const newTaskList = items.filter((state) =>
    state.pageName.includes(inputEle.value.toLowerCase()),
  );

  setTaskList(newTaskList);
};

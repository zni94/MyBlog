import { useSelector } from 'react-redux';
import '../css/nav.css';
import TimeZone from './TimeZone';
import { promise } from '../modules/promise';
import { removeActive, toggleActiveByName } from '../modules/activeControl';
import Calendar from './Calendar';
import { useState } from 'react';
import { items } from '../store/src/fileNavigator';

const NavBar = () => {
  const { taskBar, search } = useSelector((state) => state.navItems);
  const { tasks } = useSelector((state) => state.toggleItems);

  const [taskList, setTaskList] = useState(items);

  const hideHandler = (e) => {
    const pageName = 'window-' + e.currentTarget.dataset.value;
    const container = document.getElementsByName(pageName)[0];

    promise()
      .then(() => {
        container.classList.remove('hide');
      })
      .then(() => {
        removeActive('icon-container');
        toggleActiveByName('window-container', pageName);
      });
  };

  const clickEvent = () => {
    const taskEle = document.getElementById('task');
    taskEle.classList.remove('active');

    const inputEle = document.getElementById('searchArea');
    inputEle.value = '';

    const newTaskList = items.filter((state) =>
      state.pageName.includes(inputEle.value.toLowerCase()),
    );

    setTaskList(newTaskList);
  };

  const taskHandler = (e) => {
    removeActive('icon-container');
    removeActive('window-container');

    const taskEle = document.getElementById('task');
    if (!taskEle.classList.contains('active')) {
      taskEle.classList.add('active');

      document.getElementById('layout').addEventListener('click', clickEvent);
    } else {
      taskEle.classList.remove('active');

      document
        .getElementById('layout')
        .removeEventListener('click', clickEvent);

      const inputEle = document.getElementById('searchArea');
      inputEle.value = '';

      const newTaskList = items.filter((state) =>
        state.pageName.includes(inputEle.value.toLowerCase()),
      );

      setTaskList(newTaskList);
    }
  };

  const searchHandler = (e) => {
    const searchVal = e.currentTarget.value;
    const newTaskList = items.filter((state) =>
      state.pageName.includes(searchVal.toLowerCase()),
    );

    setTaskList(newTaskList);
  };

  const onClick = () => {
    const taskEle = document.getElementById('task');
    taskEle.classList.remove('active');

    const calendarEle = document.getElementsByClassName('react-calendar')[0];
    calendarEle.classList.remove('active');

    const inputEle = document.getElementById('searchArea');
    inputEle.value = '';

    const newTaskList = items.filter((state) =>
      state.pageName.includes(inputEle.value.toLowerCase()),
    );

    setTaskList(newTaskList);
  };

  return (
    <>
      <div className={'nav-task-container'} id={'task'}>
        <div className={'nav-task-header'}>
          <div className={'nav-task-search-zone'}>
            <span className={'material-symbols-outlined'}>search</span>
            <input
              id={'searchArea'}
              type={'text'}
              spellCheck={false}
              placeholder={'검색하려면 여기에 입력하세요.'}
              onChange={searchHandler}
            />
          </div>
        </div>
        <div className={'nav-task-section'}>
          <div className={'pin'}>고정됨</div>
          <ul>
            {taskList.length > 0 &&
              taskList.map((item, index) => (
                <li key={index} onClick={onClick}>
                  {item.task}
                </li>
              ))}
          </ul>
        </div>
        <div className={'nav-task-footer'}>
          <button>
            <span className={'material-symbols-outlined'}>person</span>
            <span id={'userName'}>Guest</span>
          </button>
          <button>
            <span className={'material-symbols-outlined'}>
              power_settings_new
            </span>
          </button>
        </div>
      </div>
      <Calendar />
      <div className={'nav-container'}>
        <ul className={'menu-items'}>
          <li
            className={'menu-item'}
            data-value={taskBar.pageName}
            onClick={taskHandler}
          >
            <svg width={28} height={28}>
              <image width={28} height={28} href={taskBar.thumbnail} />
            </svg>
          </li>
          <li
            className={'menu-item'}
            data-value={search.pageName}
            onClick={taskHandler}
          >
            <svg width={28} height={28}>
              <image width={28} height={28} href={search.thumbnail} />
            </svg>
          </li>
          {tasks.length > 0 &&
            tasks.map((contents, index) => (
              <li
                key={index}
                className={'menu-item'}
                data-value={contents.pageName}
                onMouseDown={hideHandler}
              >
                <svg width={28} height={28}>
                  <image width={28} height={28} href={contents.thumbnail} />
                </svg>
              </li>
            ))}
        </ul>
        <TimeZone />
      </div>
    </>
  );
};

export default NavBar;

import { useSelector } from 'react-redux';
import '../css/nav.css';
import TimeZone from './TimeZone';
import { promise } from '../modules/promise';
import { removeActive, toggleActiveByName } from '../modules/activeControl';
import Calendar from './Calendar';
import { useState } from 'react';

const NavBar = () => {
  const { taskBar, search } = useSelector((state) => state.navItems);
  const { tasks } = useSelector((state) => state.toggleItems);

  const [task, setTask] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

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
    setTask(false);
    taskEle.style.bottom = '-580px';

    const inputEle = document.getElementById('searchArea');
    inputEle.value = '';
  };

  const taskHandler = (e) => {
    removeActive('icon-container');
    removeActive('window-container');

    const taskEle = document.getElementById('task');
    if (!task) {
      setTask(true);
      taskEle.style.bottom = '60px';

      document.getElementById('layout').addEventListener('click', clickEvent);
    } else {
      setTask(false);
      taskEle.style.bottom = '-580px';

      document
        .getElementById('layout')
        .removeEventListener('click', clickEvent);

      const inputEle = document.getElementById('searchArea');
      inputEle.value = '';
    }
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
            />
          </div>
        </div>
        <div className={'nav-task-section'}></div>
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
          <li className={'menu-item'} data-value={search.pageName}>
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

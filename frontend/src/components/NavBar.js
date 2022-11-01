import { useDispatch, useSelector } from 'react-redux';
import '../css/nav.css';
import TimeZone from './TimeZone';
import { promise } from '../modules/promise';
import { removeActive, toggleActiveByName } from '../modules/activeControl';
import Calendar from './Calendar';
import { useEffect, useState } from 'react';
import { items } from '../store/src/fileNavigator';
import {
  hideTask,
  resetInput,
  showTask,
  taskClickEvent,
} from '../modules/controlNavigator';
import { hideCalendar } from '../modules/controlCalendar';
import { toggleOnOff } from '../store/src/toggleLogon';

const NavBar = () => {
  const dispatch = useDispatch();

  const { taskBar, search } = useSelector((state) => state.navItems);
  const { tasks } = useSelector((state) => state.toggleItems);

  const [taskList, setTaskList] = useState(items);
  const [ads, setAds] = useState([]);

  const [isSearch, setIsSearch] = useState(false);
  const [searchList, setSearchList] = useState([]);
  useEffect(() => {
    const taskEle = document.getElementById('task');
    if (taskEle.classList.contains('active')) showTask();
  }, [isSearch]);

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

  const taskHandler = (e) => {
    removeActive('icon-container');
    removeActive('window-container');

    taskClickEvent();
    resetInput(setTaskList);

    const name = e.currentTarget.dataset.value;
    if (name === 'search') {
      searchActive();
    } else {
      const taskEle = document.getElementById('task');
      taskEle.classList.remove('search');
      setIsSearch(false);
    }
  };

  const searchActive = () => {
    const taskEle = document.getElementById('task');
    taskEle.classList.add('search');
    setIsSearch(true);
  };

  const searchHandler = (e) => {
    const searchVal = e.currentTarget.value;
    if (searchVal !== '') {
      const newSearchList = items.filter((state) =>
        state.pageName.includes(searchVal.toLowerCase()),
      );
      setSearchList(newSearchList);
    } else {
      setSearchList([]);
    }
  };

  const onClick = () => {
    hideTask();
    hideCalendar();
    resetInput(setTaskList);
  };

  const logoffHandler = () => {
    dispatch(toggleOnOff(false));
  };

  const powerOffHandler = () => {
    window.close();
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
              placeholder={`${
                isSearch
                  ? '여기에 입력하여 검색'
                  : '검색하려면 여기에 입력하세요.'
              }`}
              onClick={searchActive}
              onChange={searchHandler}
            />
          </div>
        </div>
        <div className={'nav-task-section'}>
          {isSearch ? (
            <>
              <div className={'nav-task-section-item-box'}>
                <div className={'pin'}>검색 결과</div>
                <ul>
                  {searchList.length > 0 ? (
                    searchList.map((item, index) => (
                      <li key={index} onClick={onClick}>
                        {item.task}
                      </li>
                    ))
                  ) : (
                    <li id={'noData'}>검색 결과가 표시됩니다.</li>
                  )}
                </ul>
              </div>
              <div className={'nav-task-section-ads-box'}>
                <div className={'pin'}>광고</div>
                <ul>
                  {ads.length > 0 ? (
                    ads.map((item, index) => (
                      <li key={index} onClick={onClick}>
                        {item.task}
                      </li>
                    ))
                  ) : (
                    <li id={'noData'}>현재 진행 중인 광고가 없습니다.</li>
                  )}
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className={'nav-task-section-item-box'}>
                <div className={'pin'}>고정됨</div>
                <ul style={{ justifyContent: 'space-evenly' }}>
                  {taskList.length > 0 ? (
                    taskList.map((item, index) => (
                      <li key={index} onClick={onClick}>
                        {item.task}
                      </li>
                    ))
                  ) : (
                    <li id={'noData'}>검색 결과가 표시됩니다.</li>
                  )}
                </ul>
              </div>
              <div className={'nav-task-section-ads-box'}>
                <div className={'pin'}>광고</div>
                <ul>
                  {ads.length > 0 ? (
                    ads.map((item, index) => (
                      <li key={index} onClick={onClick}>
                        {item.task}
                      </li>
                    ))
                  ) : (
                    <li id={'noData'}>현재 진행 중인 광고가 없습니다.</li>
                  )}
                </ul>
              </div>
            </>
          )}
        </div>
        <div className={'nav-task-footer'}>
          <button onClick={logoffHandler}>
            <span className={'material-symbols-outlined'}>person</span>
            <span id={'userName'}>Guest</span>
          </button>
          <button onClick={powerOffHandler}>
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

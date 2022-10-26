import { useSelector } from 'react-redux';
import '../css/nav.css';
import TimeZone from './TimeZone';
import { promise } from '../modules/promise';
import { removeActive, toggleActiveByName } from '../modules/activeControl';
import Calendar from './Calendar';

const NavBar = () => {
  const { taskBar, search } = useSelector((state) => state.navItems);
  const { tasks } = useSelector((state) => state.toggleItems);

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

  return (
    <>
      <Calendar />
      <div className={'nav-container'}>
        <ul className={'menu-items'}>
          <li className={'menu-item'} data-value={taskBar.pageName}>
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

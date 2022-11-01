import NavBar from './NavBar';
import { useSelector } from 'react-redux';
import '../css/background.css';
import { Fragment } from 'react';
import { items } from '../store/src/fileNavigator';
import ControlWindow from './windows/ControlWindow';

const Background = () => {
  const { ide, jetbrain } = useSelector((state) => state.togglePages);

  const Icons = [
    {
      icon: items[1].folder,
    },
  ];

  const Windows = [ide, jetbrain];

  return (
    <div className={'background-container'}>
      <div className={'background-items'}>
        {Icons.map((item, index) => (
          <Fragment key={index}>{item.icon}</Fragment>
        ))}
      </div>
      <div className={'layout'} id={'layout'}>
        {Windows.length > 0 &&
          Windows.map(
            (item, index) =>
              item.isBool && (
                <Fragment key={index}>
                  <ControlWindow
                    folderObj={item}
                    defaultPath={item.path}
                    target={item.pageName}
                  />
                </Fragment>
              ),
          )}
      </div>
      <NavBar />
    </div>
  );
};

export default Background;

import NavBar from './NavBar';
import { useSelector } from 'react-redux';
import '../css/background.css';
import { Fragment } from 'react';
import { ide } from '../store/src/fileNavigator';

const Background = () => {
  const { windows } = useSelector((state) => state.toggleItems);

  const Icons = [
    {
      icon: ide.background,
    },
  ];

  return (
    <div className={'background-container'}>
      <div className={'background-items'}>
        {Icons.map((item, index) => (
          <Fragment key={index}>{item.icon}</Fragment>
        ))}
      </div>
      <div className={'layout'} id={'layout'}>
        {windows.length > 0 &&
          windows.map((item, index) => (
            <Fragment key={index}>{item.window}</Fragment>
          ))}
      </div>
      <NavBar />
    </div>
  );
};

export default Background;

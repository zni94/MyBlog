import NavBar from './NavBar';
import { useSelector } from 'react-redux';
import '../css/background.css';
import ControlFolder from './folders/ControlFolder';
import { Fragment } from 'react';

const Background = () => {
  const { ide } = useSelector((state) => state.togglePages);
  const { windows } = useSelector((state) => state.toggleItems);

  const Icons = [
    {
      icon: (
        <ControlFolder
          folderObj={ide}
          path={['C:', 'background', 'ide']}
          pageName={'ide'}
          title={'IDE'}
        />
      ),
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

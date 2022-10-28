import NavBar from './NavBar';
import { useSelector } from 'react-redux';
import '../css/background.css';
import ControlFolder from './folder/ControlFolder';
import { findPageObj } from '../modules/browserControl';
import { useEffect } from 'react';

const Background = () => {
  const { items } = useSelector((state) => state.togglePages);
  const { windows } = useSelector((state) => state.toggleItems);

  useEffect(() => {
    console.log('find page obj', findPageObj(items, 'ide'));
  }, []);

  const Icons = [
    {
      icon: (
        <ControlFolder
          obj={findPageObj(items, 'ide')}
          path={['C:', 'background', 'ide']}
          pageName={'ide'}
          title={'IDE'}
        />
      ),
    },
  ];

  return (
    <div className={'background-container'}>
      <div className={'background-items'}>{Icons.map((item) => item.icon)}</div>
      <div className={'layout'} id={'layout'}>
        {windows.length > 0 && windows.map((item) => item.window)}
      </div>
      <NavBar />
    </div>
  );
};

export default Background;

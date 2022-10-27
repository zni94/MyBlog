import NavBar from './NavBar';
import { useSelector } from 'react-redux';
import Modal from './Modal';
import '../css/background.css';
import SNSIcon from './folder/SNSIcon';
import IDEIcon from './folder/IDEIcon';
import DocumentIcon from './folder/DocumentIcon';
import ChromeIcon from './folder/ChromeIcon';

const Background = () => {
  const { isModal } = useSelector((state) => state.toggleModal);
  const { windows } = useSelector((state) => state.toggleItems);

  const Icons = [
    { icon: <SNSIcon key={0} /> },
    { icon: <IDEIcon key={1} /> },
    { icon: <DocumentIcon key={2} /> },
    { icon: <ChromeIcon key={3} /> },
  ];

  return (
    <div className={'background-container'}>
      <div className={'background-items'}>{Icons.map((item) => item.icon)}</div>
      <div className={'layout'} id={'layout'}>
        {windows.length > 0 && windows.map((item) => item.window)}
      </div>
      <NavBar />
      {isModal && <Modal />}
    </div>
  );
};

export default Background;

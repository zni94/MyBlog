import Icon from '../Icon';
import axios from 'axios';

const ControlFile = (props) => {
  const { title, pageName, thumbnail, type } = props;

  const fileHandler = () => {
    axios
      .get('/file', {
        params: {
          pageName: pageName,
        },
      })
      .then((resp) => {
        console.log('resp', resp.data);
      })
      .catch((err) => {
        console.error('error', err);
      });
  };

  switch (type) {
    case 'file':
      return (
        <Icon title={title} onDoubleClick={fileHandler} thumbnail={thumbnail} />
      );
    case 'task':
      return <Icon title={title} onClick={fileHandler} thumbnail={thumbnail} />;
    default:
      return;
  }
};

export default ControlFile;

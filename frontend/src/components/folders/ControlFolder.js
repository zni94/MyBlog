import Icon from '../Icon';
import { useDispatch } from 'react-redux';
import { promise } from '../../modules/promise';
import { removeActive, toggleActiveByName } from '../../modules/activeControl';
import { openPage } from '../../store/src/togglePages';
import { pushTask } from '../../store/src/toggleItems';

const ControlFolder = (props) => {
  /**
   * Input Object
   *   { pageName, isBool, path }
   *
   */
  const { folderObj, path, pageName, title, thumbnail, type } = props;
  const dispatch = useDispatch();

  const iconHandler = () => {
    if (folderObj.isBool) {
      removeActive('icon-container');
      toggleActiveByName('window-container', 'window-' + pageName);
      return;
    }

    promise()
      .then(() => {
        dispatch(openPage(pageName));
      })
      .then(() => {
        removeActive('icon-container');
        toggleActiveByName('window-container', 'window-' + pageName);
      })
      .then(() => {
        dispatch(
          pushTask({
            pageName: pageName,
            thumbnail: thumbnail,
          }),
        );
      });
  };

  switch (type) {
    case 'folder':
      return (
        <Icon onDoubleClick={iconHandler} title={title} thumbnail={thumbnail} />
      );
    case 'task':
      return <Icon onClick={iconHandler} title={title} thumbnail={thumbnail} />;
    default:
      return;
  }
};

export default ControlFolder;

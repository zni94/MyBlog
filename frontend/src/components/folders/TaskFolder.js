import Icon from '../Icon';
import { useDispatch } from 'react-redux';
import { promise } from '../../modules/promise';
import { removeActive, toggleActiveByName } from '../../modules/activeControl';
import { openPage } from '../../store/src/togglePages';
import { pushTask, pushWeb } from '../../store/src/toggleItems';
import ControlWindow from '../windows/ControlWindow';

const TaskFolder = (props) => {
  /**
   * Input Object
   *   { pageName, isBool, path }
   *
   */
  const { folderObj, path, pageName, title, thumbnail } = props;
  const dispatch = useDispatch();

  const onClick = () => {
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
        dispatch(
          pushWeb({
            pageName: pageName,
            window: (
              <ControlWindow
                folderObj={folderObj}
                pageName={pageName}
                defaultPath={path}
                target={pageName}
              />
            ),
          }),
        );
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

  return <Icon onClick={onClick} title={title} thumbnail={thumbnail} />;
};

export default TaskFolder;

import Icon from '../Icon';
import { useDispatch, useSelector } from 'react-redux';
import { promise } from '../../modules/promise';
import { removeActive, toggleActiveByName } from '../../modules/activeControl';
import { openPage } from '../../store/src/togglePages';
import { Menu_Icons } from '../../icons';
import { pushTask, pushWeb } from '../../store/src/toggleItems';
import ControlWindow from '../windows/ControlWindow';
import { isNull } from '../../modules/isNull';

const ControlFolder = (props) => {
  /**
   * Input Object
   *   { pageName, isBool, path }
   *
   */
  const { folderObj, path, pageName, title } = props;
  const { windows } = useSelector((state) => state.toggleItems);

  const dispatch = useDispatch();

  const onDoubleClick = () => {
    if (!isNull(folderObj)) {
      if (folderObj.isBool) {
        removeActive('icon-container');
        toggleActiveByName('window-container', 'window-' + pageName);
        return;
      }
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
            thumbnail: Menu_Icons.Folder,
          }),
        );
      });
  };

  return (
    <Icon
      onDoubleClick={onDoubleClick}
      title={title}
      thumbnail={Menu_Icons.Folder}
    />
  );
};

export default ControlFolder;

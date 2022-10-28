import Icon from '../Icon';
import { useDispatch } from 'react-redux';
import { promise } from '../../modules/promise';
import { removeActive, toggleActiveByName } from '../../modules/activeControl';
import { openPage } from '../../store/src/togglePages';
import { Menu_Icons } from '../../icons';
import { pushTask, pushWeb } from '../../store/src/toggleItems';
import ControlWindow from '../windows/ControlWindow';
import { isNull } from '../../modules/isNull';

const ControlFolder = (props) => {
  const { obj, path, pageName, title } = props;
  const dispatch = useDispatch();

  const onDoubleClick = () => {
    if (!isNull(obj)) {
      if (obj.isBool) {
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
                obj={obj}
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

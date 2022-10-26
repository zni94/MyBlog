import Icon from '../Icon';
import { useDispatch } from 'react-redux';
import { promise } from '../../modules/promise';
import { removeActive, toggleActiveByName } from '../../modules/activeControl';
import { openPage } from '../../store/src/togglePages';
import { Menu_Icons } from '../../icons';
import { pushTask, pushWeb } from '../../store/src/toggleItems';

const ControlMenu = (props) => {
  const { obj, pageName, title } = props;
  const dispatch = useDispatch();

  const onDoubleClick = () => {
    if (obj.isBool) {
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
            window: obj.component,
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

export default ControlMenu;

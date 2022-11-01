import { useDispatch } from 'react-redux';
import { promise } from '../../modules/promise';
import { useEffect, useState } from 'react';
import { isNull } from '../../modules/isNull';
import { findPage } from '../../modules/browserControl';
import Window from '../Window';
import { popTask } from '../../store/src/toggleItems';
import ControlPage from '../pages/ControlPage';
import { findParentNode } from '../../modules/activeControl';
import { changePath, closePage } from '../../store/src/togglePages';

const ControlWindow = (props) => {
  /**
   * Input Object
   *   { pageName, isBool, path }
   *
   */
  const { folderObj, defaultPath, target } = props;
  const dispatch = useDispatch();

  const [page, setPage] = useState(findPage(folderObj));

  useEffect(() => {
    setPage(findPage(folderObj));
  }, [folderObj, folderObj.path]);

  const onClose = (e) => {
    const parentNoce = findParentNode(e.target, 'windowContainer');
    const name = parentNoce.dataset.target;

    promise()
      .then(() => {
        dispatch(popTask(name));
      })
      .then(() => {
        dispatch(closePage(name));
      })
      .then(() => {
        dispatch(changePath(name, defaultPath));
      });
  };

  const topHandler = () => {
    folderObj.path.pop();
    const newPage = findPage(folderObj);
    if (!isNull(newPage)) setPage(newPage);
  };

  const navHandler = (e) => {
    folderObj.path = e.currentTarget.dataset.path.split('/');
    const newPage = findPage(folderObj);
    if (!isNull(newPage)) setPage(newPage);
  };

  const onDoubleClick = (e) => {
    folderObj.path = e.currentTarget.dataset.path.split('/');
    const newPage = findPage(folderObj);
    if (!isNull(newPage)) setPage(newPage);
  };

  return (
    <Window
      onClose={onClose}
      topHandler={topHandler}
      navHandler={navHandler}
      view={page}
      path={folderObj.path}
      target={target}
    >
      <ControlPage page={page} onDoubleClick={onDoubleClick} />
    </Window>
  );
};

export default ControlWindow;

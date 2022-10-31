import '../css/window.css';
import { useEffect, useState } from 'react';
import { promise } from '../modules/promise';
import {
  addActiveById,
  addHideById,
  findParentNode,
  removeActive,
} from '../modules/activeControl';
import { items, translatePath } from '../store/src/fileNavigator';
import { isNull } from '../modules/isNull';

const Window = (props) => {
  const { onClose, topHandler, navHandler, view, path, target, children } =
    props;

  const [isMax, setIsMax] = useState(false);
  const [thumbnail, setThumbnail] = useState(
    translatePath(path.join('/')).thumbnail,
  );

  useEffect(() => {
    setThumbnail(translatePath(path.join('/')).thumbnail);
  }, [view, path]);

  // DRAG
  const [currPosition, setCurrPosition] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [nextPosition, setNextPosition] = useState({ x: 0, y: 0 });

  const dragHandler = {
    onDragStart(e) {
      const parent = findParentNode(e.target, 'windowContainer');
      parent.style.transition = 'all 0s';

      e.dataTransfer.setDragImage(new Image(), 0, 0);

      if (isMax) return;

      setCurrPosition({ x: e.clientX, y: e.clientY });
    },
    onDragOver(e) {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';

      if (isMax) return;

      setPosition({
        x: nextPosition.x + e.clientX - currPosition.x,
        y: nextPosition.y + e.clientY - currPosition.y,
      });
    },
    onDragEnd() {
      if (isMax) return;

      setNextPosition({ x: position.x, y: position.y });
    },
  };

  const hideHandler = (e) => {
    addHideById(e.target, 'windowContainer');
    removeActive('icon-container');
  };

  const maximizeHandler = (e) => {
    const parent = findParentNode(e.target, 'windowContainer');

    promise()
      .then(() => {
        setIsMax(true);
      })
      .then(() => {
        parent.style.transition = 'all 0.2s';
        parent.classList.add('max');
      });
  };

  const minimizeHandler = (e) => {
    const parent = findParentNode(e.target, 'windowContainer');

    promise()
      .then(() => {
        setIsMax(false);
      })
      .then(() => {
        parent.style.transition = 'all 0.2s';
        parent.classList.remove('max');
      });
  };

  const activeHandler = (e) => {
    removeActive('window-container');
    addActiveById(e.target, 'windowContainer');
  };

  return (
    <div
      className={'window-container'}
      id={'windowContainer'}
      name={'window-' + target}
      style={{
        left: position.x + 'px',
        top: position.y + 'px',
      }}
      onMouseDown={activeHandler}
      draggable={true}
      data-target={target}
    >
      <div className={'window-body'}>
        <div
          className={'window-header'}
          onDragStart={dragHandler.onDragStart}
          onDragOver={dragHandler.onDragOver}
          onDragEnd={dragHandler.onDragEnd}
          onDoubleClick={!isMax ? maximizeHandler : minimizeHandler}
          draggable={true}
        >
          <div className={'window-title'}>
            <svg width={18} height={18}>
              <image width={18} height={18} href={view.thumbnail} />
            </svg>
            {view.title}
          </div>
          <ul>
            <li onMouseDown={hideHandler}>
              <span className="material-symbols-outlined">minimize</span>
            </li>
            <li onMouseDown={!isMax ? maximizeHandler : minimizeHandler}>
              {!isMax ? (
                <span className="material-symbols-outlined">
                  magnification_large
                </span>
              ) : (
                <span className="material-symbols-outlined">
                  magnification_small
                </span>
              )}
            </li>
            <li onClick={onClose}>
              <span className="material-symbols-outlined">close</span>
            </li>
          </ul>
        </div>
        <div className={'window-breadcrumb-container'}>
          <div className={'window-breadcrumb-tool'}>
            <button className={'window-tool-button'}>
              <span className={'material-symbols-outlined'}>arrow_back</span>
            </button>
            <button className={'window-tool-button'}>
              <span className={'material-symbols-outlined'}>arrow_forward</span>
            </button>
            <button className={'window-tool-button'}>
              <span className={'material-symbols-outlined'}>expand_more</span>
            </button>
            <button
              className={'window-tool-button active'}
              onClick={topHandler}
            >
              <span className={'material-symbols-outlined'}>arrow_upward</span>
            </button>
            <div className={'window-breadcrumb'}>
              <button className={'window-breadcrumb-thumbnail'}>
                <svg width={14} height={14}>
                  <image width={14} height={14} href={thumbnail} />
                </svg>
                <span className={'material-symbols-outlined'}>
                  arrow_forward_ios
                </span>
              </button>
              {path.map((item, index) => {
                const path = items.find((state) => state.pageName === item);
                const obj = isNull(path)
                  ? null
                  : translatePath(path.path.join('/'));
                return isNull(path) ? null : (
                  <button
                    key={index}
                    className={'window-breadcrumb-item'}
                    onClick={navHandler}
                    data-path={path.path.join('/')}
                  >
                    {obj.title}
                    <span className={'material-symbols-outlined'}>
                      arrow_forward_ios
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className={'window-section'}>
          <div className={'window-contents'}>{children}</div>
          <div className={'window-footer'}>{view.items.length}개 항목 │</div>
        </div>
      </div>
    </div>
  );
};

export default Window;

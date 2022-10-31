import ControlPage from '../components/pages/ControlPage';
import { isNull } from './isNull';
import ControlFile from '../components/files/ControlFile';
import BackgroundFolder from '../components/folders/BackgroundFolder';
import TaskFolder from '../components/folders/TaskFolder';
import TaskFile from '../components/files/TaskFile';
import axios from 'axios';

export const createObject = (
  type,
  path,
  title,
  pageName,
  thumbnail,
  folderObj,
  items,
) => {
  const fileObj = {
    type: type,
    path: path,
    title: title,
    pageName: pageName,
    thumbnail: thumbnail,
    items: items,
  };

  switch (type) {
    case 'folder':
      const backgroundFolder = !isNull(folderObj) ? (
        <BackgroundFolder
          folderObj={folderObj}
          pageName={pageName}
          title={title}
          path={path}
          thumbnail={thumbnail}
        />
      ) : (
        <div />
      );
      fileObj.background = backgroundFolder;

      const taskFolder = !isNull(folderObj) ? (
        <TaskFolder
          folderObj={folderObj}
          pageName={pageName}
          title={title}
          path={path}
          thumbnail={thumbnail}
        />
      ) : (
        <div />
      );
      fileObj.task = taskFolder;

      const page = !isNull(folderObj) ? (
        <ControlPage folderObj={folderObj} />
      ) : (
        <div />
      );
      fileObj.page = page;

      break;
    case 'file':
      const file = (
        <ControlFile
          title={title}
          onDoubleClick={() => {
            console.log('Hello World');
          }}
          thumbnail={thumbnail}
        />
      );
      fileObj.file = file;

      const taskFile = (
        <TaskFile
          title={title}
          onClick={() => {
            axios.get('/file').then((resp) => {
              console.log('resp', resp);
            });
          }}
          thumbnail={thumbnail}
        />
      );
      fileObj.task = taskFile;

      break;
    default:
      break;
  }
  return fileObj;
};

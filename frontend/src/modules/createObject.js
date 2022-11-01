import { isNull } from './isNull';
import ControlFile from '../components/files/ControlFile';
import ControlFolder from '../components/folders/ControlFolder';

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
    items: items.sort((a, b) => {
      if (a.pageName > b.pageName) return 1;
      if (a.pageName < b.pageName) return -1;
      if (a.pageName === b.pageName) return 0;
    }),
  };

  switch (type) {
    case 'folder':
      const commonFolder = !isNull(folderObj) ? (
        <ControlFolder
          folderObj={folderObj}
          pageName={pageName}
          title={title}
          path={path}
          thumbnail={thumbnail}
          type={'folder'}
        />
      ) : (
        <div />
      );
      fileObj.folder = commonFolder;

      const taskFolder = !isNull(folderObj) ? (
        <ControlFolder
          folderObj={folderObj}
          pageName={pageName}
          title={title}
          path={path}
          thumbnail={thumbnail}
          type={'task'}
        />
      ) : (
        <div />
      );
      fileObj.task = taskFolder;

      break;
    case 'file':
      const commonFile = (
        <ControlFile
          title={title}
          pageName={pageName}
          thumbnail={thumbnail}
          type={'file'}
        />
      );
      fileObj.file = commonFile;

      const taskFile = (
        <ControlFile
          title={title}
          pageName={pageName}
          thumbnail={thumbnail}
          type={'task'}
        />
      );
      fileObj.task = taskFile;

      break;
    default:
      break;
  }
  return fileObj;
};

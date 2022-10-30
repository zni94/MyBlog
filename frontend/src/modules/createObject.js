import ControlPage from '../components/pages/ControlPage';
import ControlFolder from '../components/folders/ControlFolder';
import { isNull } from './isNull';
import ControlFile from '../components/files/ControlFile';

export const createObject = (
  type,
  path,
  title,
  name,
  thumbnail,
  folderObj,
  items,
) => {
  const fileObj = {
    type: type,
    path: path,
    title: title,
    name: name,
    thumbnail: thumbnail,
    items: items,
  };

  switch (type) {
    case 'folder':
      const folder = !isNull(folderObj) ? (
        <ControlFolder folderObj={folderObj} pageName={name} title={title} />
      ) : (
        <div />
      );
      fileObj.folder = folder;

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
      fileObj.page = file;

      break;
    default:
      break;
  }
  return fileObj;
};

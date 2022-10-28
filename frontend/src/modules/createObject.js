import ControlPage from '../components/pages/ControlPage';
import ControlFolder from '../components/folder/ControlFolder';

export const createObject = (
  type,
  path,
  title,
  name,
  thumbnail,
  pageObj,
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
      const folder = (
        <ControlFolder obj={pageObj} pageName={name} title={title} />
      );
      fileObj.folder = folder;

      const page = <ControlPage obj={pageObj} />;
      fileObj.page = page;

      break;
    case 'file':
      break;
    default:
      break;
  }
  return fileObj;
};

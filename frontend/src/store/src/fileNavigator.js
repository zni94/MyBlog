import {IDE_Icons, Menu_Icons} from '../../icons';
import {createObject} from '../../modules/createObject';
import {pages} from './togglePages';

/* SNS Part */

/* IDE Part */
const vsCode = createObject(
  'file',
  ['C:', 'background', 'ide'],
  'VSCode',
  'vscode',
  IDE_Icons.VSCode,
  null,
  [],
);
const jetBrain = createObject(
  'folder',
  ['C:', 'background', 'ide', 'jetbrain'],
  'JetBrain',
  'jetbrain',
  IDE_Icons.ToolBox,
  null,
  [],
);
const ide = createObject(
  'folder',
  ['C:', 'background', 'ide'],
  'IDE',
  'ide',
  Menu_Icons.Folder,
  pages.ide,
  [jetBrain, vsCode],
);

const background = createObject(
  'folder',
  ['C:', 'background'],
  'Background',
  'background',
  Menu_Icons.Folder,
  null,
  [ide],
);

export const items = [jetBrain, ide, background];

export const translatePath = (path) => {
  let returnItem = {};

  items.forEach((item) => {
    if (item.path.join('/') === path) returnItem = item;
  });

  return returnItem;
};

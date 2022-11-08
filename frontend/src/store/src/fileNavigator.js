import { IDE_Icons, Menu_Icons } from '../../icons';
import { createObject } from '../../modules/createObject';
import { pages } from './togglePages';

/* SNS Part */

/* IDE Part */
const dataGrip = createObject(
  'file',
  ['C:', 'background', 'ide', 'jetbrain', 'datagrip'],
  'DataGrip',
  'datagrip',
  IDE_Icons.DataGrip,
  null,
  [],
);
const webStorm = createObject(
  'file',
  ['C:', 'background', 'ide', 'jetbrain', 'webstorm'],
  'WebStorm',
  'webstorm',
  IDE_Icons.WebStorm,
  null,
  [],
);

const intelliJ = createObject(
  'file',
  ['C:', 'background', 'ide', 'jetbrain', 'intellij'],
  'IntelliJ',
  'intellij',
  IDE_Icons.IntelliJ,
  null,
  [],
);
const vsCode = createObject(
  'file',
  ['C:', 'background', 'ide', 'vscode'],
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
  pages.jetbrain,
  [intelliJ, webStorm, dataGrip],
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
  Menu_Icons.Home,
  null,
  [ide],
);

export const items = [jetBrain, ide, vsCode, background].sort((a, b) => {
  if (a.pageName > b.pageName) return 1;
  if (a.pageName < b.pageName) return -1;
  if (a.pageName === b.pageName) return 0;
});

export const translatePath = (path) => {
  let returnItem = {};

  items.forEach((item) => {
    if (item.path.join('/') === path) returnItem = item;
  });

  return returnItem;
};

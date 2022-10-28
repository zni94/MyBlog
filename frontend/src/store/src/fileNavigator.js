import { IDE_Icons, Menu_Icons } from '../../icons';
import Background from '../../components/pages/Background';
import { createObject } from '../../modules/createObject';
import { pages } from './togglePages';
import { findPageObj } from '../../modules/browserControl';

/* SNS Part */

/* IDE Part */
export const jetBrain = createObject(
  'folder',
  ['C:', 'background', 'ide', 'jetbrain'],
  'JetBrain',
  'jetbrain',
  IDE_Icons.ToolBox,
  null,
  [],
);
export const ide = createObject(
  'folder',
  ['C:', 'background', 'ide'],
  'IDE',
  'ide',
  Menu_Icons.Folder,
  findPageObj(pages.items, 'ide'),
  [jetBrain],
);

export const background = {
  type: 'folder',
  path: ['C:', 'background'],
  title: 'Background',
  name: 'background',
  thumbnail: Menu_Icons.Home,
  page: <Background />,
  items: [ide],
};

export const items = [jetBrain, ide, background];

export const translatePath = (path) => {
  let returnItem = {};

  items.forEach((item) => {
    if (item.path.join('/') === path) returnItem = item;
  });

  return returnItem;
};

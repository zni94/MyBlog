import {Document_Icons, IDE_Icons, Menu_Icons} from '../../icons';
import Background from '../../components/pages/Background';
import SNS from '../../components/pages/SNS';
import IDE from '../../components/pages/IDE';
import JetBrain from '../../components/pages/JetBrain';
import TStoryIcon from '../../components/files/sns/TStoryIcon';
import BlogIcon from '../../components/files/sns/BlogIcon';
import Document from '../../components/pages/Document';
import IntelliJIcon from '../../components/files/toolbox/IntelliJIcon';
import WebStormIcon from '../../components/files/toolbox/WebStromIcon';
import DataGripIcon from '../../components/files/toolbox/DataGripIcon';
import VSCodeIcon from '../../components/files/toolbox/VSCodeIcon';

/* SNS Part */
export const sns = {
  type: 'folder',
  path: ['C:', 'background', 'sns'],
  title: 'SNS',
  name: 'sns',
  thumbnail: Menu_Icons.Folder,
  contents: <SNS />,
  items: [
    { type: 'file', component: <TStoryIcon /> },
    { type: 'file', component: <BlogIcon /> },
  ],
};
/* SNS Part */

/* IDE Part */
export const jetBrain = {
  type: 'folder',
  path: ['C:', 'background', 'ide', 'jetbrain'],
  title: 'JetBrain',
  name: 'jetbrain',
  thumbnail: IDE_Icons.ToolBox,
  contents: <JetBrain />,
  items: [
    { type: 'file', component: <IntelliJIcon /> },
    { type: 'file', component: <WebStormIcon /> },
    { type: 'file', component: <DataGripIcon /> },
  ],
};
export const ide = {
  type: 'folder',
  path: ['C:', 'background', 'ide'],
  title: 'IDE',
  name: 'ide',
  thumbnail: Menu_Icons.Folder,
  contents: <IDE />,
  items: [jetBrain, { type: 'file', component: <VSCodeIcon /> }],
};
/* IDE Part */

/* Document Part */
export const music = {
  type: 'folder',
  path: ['C:', 'background', 'document', 'music'],
  title: 'Music',
  name: 'music',
  thumbnail: Document_Icons.Music,
  contents: <div />,
  items: [],
};
export const photo = {
  type: 'folder',
  path: ['C:', 'background', 'document', 'photo'],
  title: 'Photo',
  name: 'photo',
  thumbnail: Document_Icons.Picture,
  contents: <div />,
  items: [],
};
export const video = {
  type: 'folder',
  path: ['C:', 'background', 'document', 'video'],
  title: 'Video',
  name: 'video',
  thumbnail: Document_Icons.Video,
  contents: <div />,
  items: [],
};
export const document = {
  type: 'folder',
  path: ['C:', 'background', 'document'],
  title: 'Document',
  name: 'document',
  thumbnail: Menu_Icons.Folder,
  contents: <Document />,
  items: [music, photo, video],
};
/* Document Part */

export const background = {
  type: 'folder',
  path: ['C:', 'background'],
  title: 'Background',
  name: 'background',
  thumbnail: Menu_Icons.Home,
  contents: <Background />,
  items: [sns, ide, document],
};

export const items = [
  sns,
  //
  jetBrain,
  ide,
  //
  music,
  photo,
  video,
  document,
  //
  background,
];

export const translatePath = (path) => {
  let returnItem = {};

  items.forEach((item) => {
    if (item.path.join('/') === path) returnItem = item;
  });

  return returnItem;
};

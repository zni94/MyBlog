import {Document_Icons, IDE_Icons, Menu_Icons} from "../../icons";
import Background from "../../components/pages/Background";
import SNS from "../../components/pages/SNS";
import IDE from "../../components/pages/IDE";
import JetBrain from "../../components/pages/JetBrain";
import TStoryIcon from "../../components/files/sns/TStoryIcon";
import BlogIcon from "../../components/files/sns/BlogIcon";
import Document from "../../components/pages/Document";
import IntelliJIcon from "../../components/files/toolbox/IntelliJIcon";
import WebStormIcon from "../../components/files/toolbox/WebStromIcon";
import DataGripIcon from "../../components/files/toolbox/DataGripIcon";
import VSCodeIcon from "../../components/files/toolbox/VSCodeIcon";

export const background = {
    type: 'folder',
    path: ['C:', 'background'],
    title: 'Background',
    name: 'background',
    thumbnail: Menu_Icons.Home,
    contents: <Background/>,
    items: [
        {type: 'folder', title: 'SNS', thumbnail: Menu_Icons.Folder, path: ['C:', 'background', 'sns']},
        {type: 'folder', title: 'IDE', thumbnail: Menu_Icons.Folder, path: ['C:', 'background', 'ide']},
        {type: 'folder', title: 'Document', thumbnail: Menu_Icons.Folder, path: ['C:', 'background', 'document']},
    ]
};

export const sns = {
    type: 'folder',
    path: ['C:', 'background', 'sns'],
    title: 'SNS',
    name: 'sns',
    thumbnail: Menu_Icons.Folder,
    contents: <SNS/>,
    items: [
        {type: 'file', component: <TStoryIcon/>},
        {type: 'file', component: <BlogIcon/>},
    ],
};

/* IDE Part */
export const ide = {
    type: 'folder',
    path: ['C:', 'background', 'ide'],
    title: 'IDE',
    name: 'ide',
    thumbnail: Menu_Icons.Folder,
    contents: <IDE/>,
    items: [
        {
            type: 'folder',
            title: 'JetBrain',
            thumbnail: IDE_Icons.ToolBox,
            path: ['C:', 'background', 'ide', 'jetbrain']
        },
        {type: 'file', component: <VSCodeIcon/>}
    ]
};
export const jetBrain = {
    type: 'folder',
    path: ['C:', 'background', 'ide', 'jetbrain'],
    title: 'JetBrain',
    name: 'jetbrain',
    thumbnail: IDE_Icons.ToolBox,
    contents: <JetBrain/>,
    items: [
        {type: 'file', component: <IntelliJIcon/>},
        {type: 'file', component: <WebStormIcon/>},
        {type: 'file', component: <DataGripIcon/>},
    ],
};
/* IDE Part */

/* Document Part */
export const document = {
    type: 'folder',
    path: ['C:', 'background', 'document'],
    title: 'Document',
    name: 'document',
    thumbnail: Menu_Icons.Folder,
    contents: <Document/>,
    items: [
        {
            type: 'folder',
            title: 'Music',
            thumbnail: Document_Icons.Music,
            path: ['C:', 'background', 'document', 'music']
        },
        {
            type: 'folder',
            title: 'Photo',
            thumbnail: Document_Icons.Picture,
            path: ['C:', 'background', 'document', 'photo']
        },
        {
            type: 'folder',
            title: 'Video',
            thumbnail: Document_Icons.Video,
            path: ['C:', 'background', 'document', 'video']
        },
    ],
};
export const music = {
    type: 'folder',
    path: ['C:', 'background', 'document', 'music'],
    title: 'Music',
    name: 'music',
    thumbnail: Document_Icons.Music,
    contents: <div/>,
    items: [],
};
export const photo = {
    type: 'folder',
    path: ['C:', 'background', 'document', 'photo'],
    title: 'Photo',
    name: 'photo',
    thumbnail: Document_Icons.Picture,
    contents: <div/>,
    items: [],
};
export const video = {
    type: 'folder',
    path: ['C:', 'background', 'document', 'video'],
    title: 'Video',
    name: 'video',
    thumbnail: Document_Icons.Video,
    contents: <div/>,
    items: [],
};
/* Document Part */

export const items = [
    background,
    sns,
    ide,
    jetBrain,
    document,
    music,
    photo,
    video,
];

export const translatePath = (path) => {
    let returnItem = {};

    items.forEach(item => {
        if (item.path.join('/') === path) returnItem = item;
    })

    return returnItem;
}

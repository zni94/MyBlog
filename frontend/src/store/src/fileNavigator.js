import {MenuIcon} from "../../icons";
import Background from "../../components/pages/Background";
import SNS from "../../components/pages/SNS";
import IDE from "../../components/pages/IDE";
import JetBrain from "../../components/pages/JetBrain";
import TStoryIcon from "../../components/Icons/sns/TStoryIcon";
import BlogIcon from "../../components/Icons/sns/BlogIcon";

export const background = {
    type: 'folder',
    path: ['C:', 'background'],
    title: 'Background',
    name: 'background',
    thumbnail: MenuIcon.Home,
    contents: <Background/>,
    items: [
        {type: 'folder', title: 'SNS', thumbnail: MenuIcon.Folder, path: ['C:', 'background', 'sns']},
        {type: 'folder', title: 'IDE', thumbnail: MenuIcon.Folder, path: ['C:', 'background', 'ide']}
    ]
};

export const sns = {
    type: 'folder',
    path: ['C:', 'background', 'sns'],
    title: 'SNS',
    name: 'sns',
    thumbnail: MenuIcon.Folder,
    contents: <SNS/>,
    items: [
        {type: 'file', file: <TStoryIcon/>},
        {type: 'file', file: <BlogIcon/>},
    ],
};

export const ide = {
    type: 'folder',
    path: ['C:', 'background', 'ide'],
    title: 'IDE',
    name: 'ide',
    thumbnail: MenuIcon.Folder,
    contents: <IDE/>,
    items: [
        {
            type: 'folder',
            title: 'JetBrain',
            thumbnail: MenuIcon.Folder,
            path: ['C:', 'background', 'ide', 'jetBrain']
        },
    ]
};

export const jetBrain = {
    type: 'folder',
    path: ['C:', 'background', 'ide', 'jetBrain'],
    title: 'JetBrain',
    name: 'jetBrain',
    thumbnail: MenuIcon.Folder,
    contents: <JetBrain/>,
    items: [],
};

export const items = [
    background,
    sns,
    ide,
    jetBrain,
];

export const translatePath = (path) => {
    let returnItem = {};

    items.forEach(item => {
        if (item.path.join('/') === path) returnItem = item;
    })

    return returnItem;
}

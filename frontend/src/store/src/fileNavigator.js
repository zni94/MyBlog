import {MenuIcon} from "../../icons";
import Background from "../../components/pages/Background";
import SNS from "../../components/pages/SNS";
import IDE from "../../components/pages/IDE";
import JetBrain from "../../components/pages/JetBrain";

export const background = {
    type: 'folder',
    path: 'C:/background/',
    target: 'C:',
    title: 'Background',
    name: 'background',
    thumbnail: MenuIcon.Home,
    contents: <Background/>,
    items: [
        {type: 'folder', target: 'background', title: 'SNS', thumbnail: MenuIcon.Folder, path: 'C:/background/sns/'},
        {type: 'folder', target: 'background', title: 'IDE', thumbnail: MenuIcon.Folder, path: 'C:/background/ide/'}
    ]
};

export const sns = {
    type: 'folder',
    path: 'C:/background/sns/',
    target: 'background',
    title: 'SNS',
    name: 'sns',
    thumbnail: MenuIcon.Folder,
    contents: <SNS/>,
};

export const ide = {
    type: 'folder',
    path: 'C:/background/ide/',
    target: 'background',
    title: 'IDE',
    name: 'ide',
    thumbnail: MenuIcon.Folder,
    contents: <IDE/>,
    items: [
        {
            type: 'folder',
            target: 'ide',
            title: 'JetBrain',
            thumbnail: MenuIcon.Folder,
            path: 'C:/background/ide/jet-brain/'
        },
    ]
};

export const jetBrain = {
    type: 'folder',
    path: 'C:/background/ide/jet-brain/',
    target: 'ide',
    title: 'JetBrain',
    name: 'jetBrain',
    thumbnail: MenuIcon.Folder,
    contents: <JetBrain/>,
    items: []
};

export const items = [
    background,
    sns,
    ide,
    jetBrain,
];

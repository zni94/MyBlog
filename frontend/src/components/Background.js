import NavBar from "./NavBar";
import {useSelector} from "react-redux";
import Modal from "./Modal";
import DiaryIcon from "./Icons/menus/DiaryIcon";
import ProfileIcon from "./Icons/menus/ProfileIcon";
import '../css/background.css';
import GameIcon from "./Icons/menus/GameIcon";
import SNSIcon from "./Icons/menus/SNSIcon";
import DiaryWindow from "./windows/DiaryWindow";
import IDEIcon from "./Icons/menus/IDEIcon";
import ProfileWindow from "./windows/ProfileWindow";
import GameWindow from "./windows/GameWindow";
import SNSWindow from "./windows/SNSWindow";
import IDEWindow from "./windows/IDEWindow";

const Background = () => {
    const {diary, profile, game, sns, ide} = useSelector(state => state.togglePages);
    const {isModal} = useSelector(state => state.toggleModal);

    const Icons = [
        {icon: <DiaryIcon key={0}/>},
        {icon: <ProfileIcon key={1}/>},
        {icon: <GameIcon key={2}/>},
        {icon: <SNSIcon key={3}/>},
        {icon: <IDEIcon key={4}/>},
    ]

    const Windows = [
        {bool: diary, window: <DiaryWindow key={0}/>},
        {bool: profile, window: <ProfileWindow key={1}/>},
        {bool: game, window: <GameWindow key={2}/>},
        {bool: sns, window: <SNSWindow key={3}/>},
        {bool: ide, window: <IDEWindow key={4}/>}
    ]

    return (
        <div className={'background-container'}>
            <div className={'background-items'}>
                {Icons.map(item => (
                    item.icon
                ))}
            </div>
            <div className={'layout'}>
                {Windows.map(item => (
                    item.bool && item.window
                ))}
                <NavBar/>
            </div>
            {isModal && <Modal/>}
        </div>
    )
}

export default Background;
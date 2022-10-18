import NavBar from "./NavBar";
import {useSelector} from "react-redux";
import Modal from "./Modal";
import Profile from "../pages/Profile";
import DiaryIcon from "../Icons/menus/DiaryIcon";
import ProfileIcon from "../Icons/menus/ProfileIcon";
import '../css/background.css';
import GameIcon from "../Icons/menus/GameIcon";
import SNSIcon from "../Icons/menus/SNSIcon";
import SNSWindow from "../windows/SNSWindow";
import GameWindow from "../windows/GameWindow";
import DiaryWindow from "../windows/DiaryWindow";

const Background = () => {
    const {profile, diary, game, sns} = useSelector(state => state.togglePages);
    const {isModal} = useSelector(state => state.toggleModal);

    return (
        <div className={'background-container'}>
            <div className={'background-items'}>
                <DiaryIcon/>
                <ProfileIcon/>
                <GameIcon/>
                <SNSIcon/>
            </div>
            <div className={'layout'}>
                {diary && <DiaryWindow/>}
                {profile && <Profile/>}
                {game && <GameWindow/>}
                {sns && <SNSWindow/>}
                <NavBar/>
            </div>
            {isModal && <Modal/>}
        </div>
    )
}

export default Background;
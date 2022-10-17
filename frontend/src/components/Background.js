import NavBar from "./NavBar";
import {useSelector} from "react-redux";
import Modal from "./Modal";
import Diary from "../pages/Diary";
import Profile from "../pages/Profile";
import DiaryIcon from "../Icons/menus/DiaryIcon";
import ProfileIcon from "../Icons/menus/ProfileIcon";
import '../css/background.css';
import GameIcon from "../Icons/menus/GameIcon";
import Game from "../pages/Game";
import SNSIcon from "../Icons/menus/SNSIcon";
import SNS from "../pages/SNS";

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
                {diary && <Diary/>}
                {profile && <Profile/>}
                {game && <Game/>}
                {sns && <SNS/>}
                <NavBar/>
            </div>
            {isModal && <Modal/>}
        </div>
    )
}

export default Background;
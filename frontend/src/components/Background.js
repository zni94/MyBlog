import NavBar from "./NavBar";
import {useDispatch, useSelector} from "react-redux";
import {Fragment} from "react";
import Modal from "./Modal";
import Diary from "../pages/Diary";
import Profile from "../pages/Profile";
import DiaryIcon from "../Icons/DiaryIcon";
import ProfileIcon from "../Icons/ProfileIcon";
import '../css/background.css';

const Background = () => {
    const dispatch = useDispatch();

    const {home, profile, diary} = useSelector(state => state.togglePages);
    const {isModal} = useSelector(state => state.toggleModal);

    return (
        <Fragment>
            <div className={'background-items'}>
                <DiaryIcon/>
                <ProfileIcon/>
            </div>
            <div className={'layout'}>
                {diary && <Diary/>}
                {profile && <Profile/>}
                <NavBar/>
            </div>
            {isModal && <Modal/>}
        </Fragment>
    )
}

export default Background;
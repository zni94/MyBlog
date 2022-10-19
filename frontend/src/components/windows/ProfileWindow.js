import Window from "../Window";
import {useDispatch} from "react-redux";
import {closePage} from "../../store/src/togglePages";
import {promise} from "../../modules/promise";
import {popItems} from "../../store/src/navItems";
import {MenuIcon} from "../../icons";
import Profile from "../pages/Profile";

const ProfileWindow = () => {
    const dispatch = useDispatch();

    const onClose = (e) => {
        promise().then(() => {
            dispatch(closePage('profile'))
        }).then(() => {
            dispatch(popItems('profile'))
        })
    }

    return (
        <Window title={'Profile'} onClose={onClose} name={'profile'} thumbnail={MenuIcon.Folder}>
            <Profile/>
        </Window>
    )
}

export default ProfileWindow;
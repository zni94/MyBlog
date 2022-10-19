import Icon from "../../Icon";
import {useDispatch, useSelector} from "react-redux";
import {openPage} from "../../../store/src/togglePages";
import {promise} from "../../../modules/promise";
import {pushItems} from "../../../store/src/navItems";
import {removeActive, toggleActiveByName} from "../../../modules/activeControl";
import {MenuIcon} from "../../../icons";

const ProfileIcon = () => {
    const dispatch = useDispatch();

    const {profile} = useSelector(state => state.togglePages)

    const onDoubleClick = () => {
        if (profile) {
            removeActive('icon-container')
            toggleActiveByName('window-container', 'window-profile')
            return;
        }

        promise().then(() => {
            dispatch(openPage('profile'));
        }).then(() => {
            removeActive('icon-container')
            toggleActiveByName('window-container', 'window-profile')
        }).then(() => {
            dispatch(pushItems({name: 'profile', thumbnail: MenuIcon.Folder}))
        })
    }

    return <Icon onDoubleClick={onDoubleClick} title={'Profile'} thumbnail={MenuIcon.Folder}/>

}

export default ProfileIcon;
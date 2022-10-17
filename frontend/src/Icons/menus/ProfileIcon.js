import Icon from "../../components/Icon";
import {useDispatch, useSelector} from "react-redux";
import {openPage} from "../../store/src/togglePages";
import {promise} from "../../modules/promise";
import {pushItems} from "../../store/src/navItems";
import {removeActive, toggleActiveByName} from "../../modules/activeControl";

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
            dispatch(pushItems({name: 'profile', icon: 'PERSON'}))
        })
    }

    return (
        <Icon onDoubleClick={onDoubleClick} title={'Profile'}>
            <span className={'material-symbols-outlined'}>PERSON</span>
        </Icon>
    )
}

export default ProfileIcon;
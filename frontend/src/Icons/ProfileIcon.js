import Icon from "../components/Icon";
import {useDispatch} from "react-redux";
import {openPage} from "../store/src/togglePages";
import {promise} from "../modules/promise";
import {pushItems} from "../store/src/navItems";

const ProfileIcon = () => {
    const dispatch = useDispatch();

    const onDoubleClick = () => {
        promise().then(() => {
            dispatch(openPage('profile'));
        }).then(() => {
            dispatch(pushItems({name: 'profile', icon: 'PERSON'}))
        })
    }

    return <Icon onDoubleClick={onDoubleClick} title={'Profile'}/>
}

export default ProfileIcon;
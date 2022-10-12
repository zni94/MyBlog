import Window from "../components/Window";
import {useDispatch} from "react-redux";
import {closePage} from "../store/src/togglePages";
import {promise} from "../modules/promise";
import {popItems} from "../store/src/navItems";

const Profile = () => {
    const dispatch = useDispatch();

    const onClose = (e) => {
        promise().then(() => {
            dispatch(closePage('profile'))
        }).then(() => {
            dispatch(popItems('profile'))
        })
    }

    return (
        <Window title={'Profile'} onClose={onClose}>
            <div className={'profile-container'}>
                <div className={'profile-contents'}>PROFILE</div>
            </div>
        </Window>
    )
}

export default Profile;
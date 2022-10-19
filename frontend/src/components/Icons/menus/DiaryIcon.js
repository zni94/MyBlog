import Icon from "../../Icon";
import {useDispatch, useSelector} from "react-redux";
import {openPage} from "../../../store/src/togglePages";
import {promise} from "../../../modules/promise";
import {pushItems} from "../../../store/src/navItems";
import {removeActive, toggleActiveByName} from "../../../modules/activeControl";
import {MenuIcon} from "../../../icons";

const DiaryIcon = () => {
    const dispatch = useDispatch();

    const {diary} = useSelector(state => state.togglePages)

    const onDoubleClick = () => {
        if (diary) {
            removeActive('icon-container')
            toggleActiveByName('window-container', 'window-diary')
            return;
        }

        promise().then(() => {
            dispatch(openPage('diary'));
        }).then(() => {
            removeActive('icon-container')
            toggleActiveByName('window-container', 'window-diary')
        }).then(() => {
            dispatch(pushItems({name: 'diary', thumbnail: MenuIcon.Folder}))
        })
    }

    return <Icon onDoubleClick={onDoubleClick} title={'Diary'} thumbnail={MenuIcon.Folder}/>
}

export default DiaryIcon;
import Icon from "../../Icon";
import {useDispatch, useSelector} from "react-redux";
import {openPage} from "../../../store/src/togglePages";
import {promise} from "../../../modules/promise";
import {pushItems} from "../../../store/src/navItems";
import {removeActive, toggleActiveByName} from "../../../modules/activeControl";
import {MenuIcon} from "../../../icons";

const IDEIcon = () => {
    const dispatch = useDispatch();

    const {ide} = useSelector(state => state.togglePages)

    const onDoubleClick = () => {
        if (ide) {
            removeActive('icon-container')
            toggleActiveByName('window-container', 'window-ide')
            return;
        }

        promise().then(() => {
            dispatch(openPage('ide'));
        }).then(() => {
            removeActive('icon-container')
            toggleActiveByName('window-container', 'window-ide')
        }).then(() => {
            dispatch(pushItems({name: 'ide', thumbnail: MenuIcon.Folder}))
        })
    }

    return <Icon onDoubleClick={onDoubleClick} title={'IDE'} thumbnail={MenuIcon.Folder}/>

}

export default IDEIcon;
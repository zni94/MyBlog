import Icon from "../../Icon";
import {useDispatch} from "react-redux";
import {promise} from "../../../modules/promise";
import {pushItems} from "../../../store/src/navItems";
import {addActiveByName, removeActive, toggleActiveByName} from "../../../modules/activeControl";
import {MenuIcon} from "../../../icons";
import {openPage} from "../../../store/src/togglePages";

const ControlMenu = (props) => {
    const {obj, pageName, title} = props;
    const dispatch = useDispatch();

    const onDoubleClick = () => {
        if (obj.isBool) {
            removeActive('icon-container')
            addActiveByName('window-' + pageName)
            return;
        }

        promise().then(() => {
            dispatch(openPage(pageName))
        }).then(() => {
            const container = document.getElementsByName('window-' + pageName)[0]
            removeActive('icon-container')
            toggleActiveByName(container, 'window-' + pageName)
        }).then(() => {
            dispatch(pushItems({name: pageName, thumbnail: MenuIcon.Folder}))
        })
    }

    return <Icon onDoubleClick={onDoubleClick} title={title} thumbnail={MenuIcon.Folder}/>
}

export default ControlMenu;
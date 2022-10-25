import Icon from "../Icon";
import {useDispatch} from "react-redux";
import {promise} from "../../modules/promise";
import {pushItems} from "../../store/src/navItems";
import {removeActive, toggleActiveByName} from "../../modules/activeControl";
import {openPage} from "../../store/src/togglePages";
import {Menu_Icons} from "../../icons";

const ControlMenu = (props) => {
    const {obj, pageName, title} = props;
    const dispatch = useDispatch();

    const onDoubleClick = () => {
        if (obj.isBool) {
            removeActive('icon-container')
            toggleActiveByName('window-container', 'window-' + pageName)
            return;
        }

        promise().then(() => {
            dispatch(openPage(pageName))
        }).then(() => {
            const container = document.getElementsByName('window-' + pageName)[0]
            removeActive('icon-container')
            toggleActiveByName('window-container', 'window-' + pageName)
        }).then(() => {
            dispatch(pushItems({name: pageName, thumbnail: Menu_Icons.Folder}))
        })
    }

    return <Icon onDoubleClick={onDoubleClick} title={title} thumbnail={Menu_Icons.Folder}/>
}

export default ControlMenu;
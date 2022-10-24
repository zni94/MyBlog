import Icon from "../../Icon";
import {useDispatch, useSelector} from "react-redux";
import {promise} from "../../../modules/promise";
import {pushItems} from "../../../store/src/navItems";
import {removeActive} from "../../../modules/activeControl";
import {MenuIcon} from "../../../icons";
import {openPage} from "../../../store/src/togglePages";

const IDEIcon = () => {
    const dispatch = useDispatch();

    const {ide} = useSelector(state => state.togglePages)

    const onDoubleClick = () => {
        if (ide.isBool) {
            removeActive('icon-container')
            return;
        }

        promise().then(() => {
            dispatch(openPage('ide'))
        }).then(() => {
            removeActive('icon-container')
        }).then(() => {
            dispatch(pushItems({name: 'ide', thumbnail: MenuIcon.Folder}))
        })
    }

    return <Icon onDoubleClick={onDoubleClick} title={'IDE'} thumbnail={MenuIcon.Folder}/>
}

export default IDEIcon;
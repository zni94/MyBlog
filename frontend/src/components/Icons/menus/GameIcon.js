import Icon from "../../Icon";
import {useDispatch, useSelector} from "react-redux";
import {openPage} from "../../../store/src/togglePages";
import {promise} from "../../../modules/promise";
import {pushItems} from "../../../store/src/navItems";
import {removeActive, toggleActiveByName} from "../../../modules/activeControl";
import {MenuIcon} from "../../../icons";

const GameIcon = () => {
    const dispatch = useDispatch();

    const {game} = useSelector(state => state.togglePages)

    const onDoubleClick = () => {
        if (game) {
            removeActive('icon-container')
            toggleActiveByName('window-container', 'window-game')
            return;
        }

        promise().then(() => {
            dispatch(openPage('game'));
        }).then(() => {
            removeActive('icon-container')
            toggleActiveByName('window-container', 'window-game')
        }).then(() => {
            dispatch(pushItems({name: 'game', thumbnail: MenuIcon.Folder}))
        })
    }

    return <Icon onDoubleClick={onDoubleClick} title={'Game'} thumbnail={MenuIcon.Folder}/>
}

export default GameIcon;
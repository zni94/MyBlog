import Icon from "../../components/Icon";
import {useDispatch, useSelector} from "react-redux";
import {openPage} from "../../store/src/togglePages";
import {promise} from "../../modules/promise";
import {pushItems} from "../../store/src/navItems";
import {removeActive, toggleActiveByName} from "../../modules/activeControl";
import Nintendo_Icon from "../../lib/icons/Nintendo_300.png";

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
            dispatch(pushItems({name: 'game', thumbnail: Nintendo_Icon}))
        })
    }

    return <Icon onDoubleClick={onDoubleClick} title={'Game'} thumbnail={Nintendo_Icon}/>
}

export default GameIcon;
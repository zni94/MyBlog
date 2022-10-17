import Icon from "../../components/Icon";
import {useDispatch, useSelector} from "react-redux";
import {openPage} from "../../store/src/togglePages";
import {promise} from "../../modules/promise";
import {pushItems} from "../../store/src/navItems";
import {removeActive, toggleActiveByName} from "../../modules/activeControl";

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
            dispatch(pushItems({name: 'game', icon: 'SPORTS_ESPORTS'}))
        })
    }

    return (
        <Icon onDoubleClick={onDoubleClick} title={'Game'}>
            <span className={'material-symbols-outlined'}>SPORTS_ESPORTS</span>
        </Icon>
    )
}

export default GameIcon;
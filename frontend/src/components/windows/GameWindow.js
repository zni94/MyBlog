import Window from "../Window";
import {closePage} from "../../store/src/togglePages";
import {useDispatch} from "react-redux";
import {promise} from "../../modules/promise";
import {popItems} from "../../store/src/navItems";
import Game from "../pages/Game";
import {MenuIcon} from "../../icons";


const GameWindow = () => {
    const dispatch = useDispatch();

    const onClose = (e) => {
        promise().then(() => {
            dispatch(closePage('game'))
        }).then(() => {
            dispatch(popItems('game'))
        })
    }

    return (
        <Window title={'Game'} onClose={onClose} name={'game'} thumbnail={MenuIcon.Folder}>
            <Game/>
        </Window>
    )
}

export default GameWindow;
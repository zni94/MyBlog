import Window from "../components/Window";
import {closePage} from "../store/src/togglePages";
import {useDispatch} from "react-redux";
import {promise} from "../modules/promise";
import {popItems} from "../store/src/navItems";
import Game from "../pages/Game";
import Nintendo_Icon from '../lib/icons/Nintendo_300.png'


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
        <Window title={'Game'} onClose={onClose} name={'game'} thumbnail={Nintendo_Icon}>
            <Game/>
        </Window>
    )
}

export default GameWindow;
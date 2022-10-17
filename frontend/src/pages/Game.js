import Window from "../components/Window";
import {closePage} from "../store/src/togglePages";
import {useDispatch} from "react-redux";
import {promise} from "../modules/promise";
import {popItems} from "../store/src/navItems";
import MapleStoryIcon from "../Icons/games/MapleStoryIcon";


const Game = () => {
    const dispatch = useDispatch();

    const onClose = (e) => {
        promise().then(() => {
            dispatch(closePage('game'))
        }).then(() => {
            dispatch(popItems('game'))
        })
    }

    return (
        <Window title={'Game'} onClose={onClose} name={'game'}>
            <div className={'contents-container'}>
                <div className={'contents'}>
                    <ul>
                        <li>
                            <MapleStoryIcon/>
                        </li>
                    </ul>
                </div>
            </div>
        </Window>
    )
}

export default Game;
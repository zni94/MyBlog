import Window from "../components/Window";
import {closePage} from "../store/src/togglePages";
import {useDispatch} from "react-redux";
import {promise} from "../modules/promise";
import {popItems} from "../store/src/navItems";
import Diary from "../pages/Diary";
import Diary_Icon from '../lib/icons/Diary_300.png'

const DiaryWindow = () => {
    const dispatch = useDispatch();

    const onClose = (e) => {
        promise().then(() => {
            dispatch(closePage('diary'))
        }).then(() => {
            dispatch(popItems('diary'))
        })
    }

    return (
        <Window title={'Diary'} onClose={onClose} name={'diary'} thumbnail={Diary_Icon}>
            <Diary/>
        </Window>
    )
}

export default DiaryWindow;
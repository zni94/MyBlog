import Window from "../Window";
import {closePage} from "../../store/src/togglePages";
import {useDispatch} from "react-redux";
import {promise} from "../../modules/promise";
import {popItems} from "../../store/src/navItems";
import Diary from "../pages/Diary";
import {MenuIcon} from "../../icons";

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
        <Window title={'Diary'} onClose={onClose} name={'diary'} thumbnail={MenuIcon.Folder}>
            <Diary/>
        </Window>
    )
}

export default DiaryWindow;
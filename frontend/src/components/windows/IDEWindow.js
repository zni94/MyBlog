import Window from "../Window";
import {useDispatch} from "react-redux";
import {closePage} from "../../store/src/togglePages";
import {promise} from "../../modules/promise";
import {popItems} from "../../store/src/navItems";
import {MenuIcon} from "../../icons";
import IDE from "../pages/IDE";

const IDEWindow = () => {
    const dispatch = useDispatch();

    const onClose = (e) => {
        promise().then(() => {
            dispatch(closePage('ide'))
        }).then(() => {
            dispatch(popItems('ide'))
        })
    }

    return (
        <Window title={'IDE'} onClose={onClose} name={'ide'} thumbnail={MenuIcon.Folder}>
            <IDE/>
        </Window>
    )
}

export default IDEWindow;
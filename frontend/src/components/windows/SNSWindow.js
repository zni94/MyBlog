import Window from "../Window";
import {useDispatch} from "react-redux";
import {closePage} from "../../store/src/togglePages";
import {promise} from "../../modules/promise";
import {popItems} from "../../store/src/navItems";
import SNS from "../pages/SNS";
import {MenuIcon} from "../../icons";

const SNSWindow = () => {
    const dispatch = useDispatch();

    const onClose = (e) => {
        promise().then(() => {
            dispatch(closePage('sns'))
        }).then(() => {
            dispatch(popItems('sns'))
        })
    }

    return (
        <Window title={'SNS'} onClose={onClose} name={'sns'} thumbnail={MenuIcon.Folder}>
            <SNS/>
        </Window>
    )
}

export default SNSWindow;
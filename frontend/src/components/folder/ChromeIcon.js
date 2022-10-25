import Icon from "../Icon";
import {Menu_Icons} from "../../icons";
import {useDispatch} from "react-redux";
import {promise} from "../../modules/promise";
import {changeWeb} from "../../store/src/toggleWeb";

const ChromeIcon = () => {
    const dispatch = useDispatch();

    const onDoubleClick = () => {
        promise().then(() => {
            dispatch(changeWeb(true, 'https://google.com'));
        })
    }

    return <Icon title={'Chrome'} onDoubleClick={onDoubleClick} thumbnail={Menu_Icons.Chrome}/>
}

export default ChromeIcon
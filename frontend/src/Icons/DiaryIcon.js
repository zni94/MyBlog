import Icon from "../components/Icon";
import {useDispatch} from "react-redux";
import {openPage} from "../store/src/togglePages";
import {promise} from "../modules/promise";
import {pushItems} from "../store/src/navItems";

const DiaryIcon = () => {
    const dispatch = useDispatch();

    const onDoubleClick = () => {
        promise().then(() => {
            dispatch(openPage('diary'));
        }).then(() => {
            dispatch(pushItems({name: 'diary', icon: 'IMPORT_CONTACTS'}))
        })
    }

    return <Icon onDoubleClick={onDoubleClick} title={'Diary'}/>
}

export default DiaryIcon;
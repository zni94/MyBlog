import Icon from "../../Icon";
import {useDispatch, useSelector} from "react-redux";
import {openPage} from "../../../store/src/togglePages";
import {promise} from "../../../modules/promise";
import {pushItems} from "../../../store/src/navItems";
import {removeActive, toggleActiveByName} from "../../../modules/activeControl";
import {MenuIcon} from "../../../icons";

const SNSIcon = () => {
    const dispatch = useDispatch();

    const {sns} = useSelector(state => state.togglePages)

    const onDoubleClick = () => {
        if (sns) {
            removeActive('icon-container')
            toggleActiveByName('window-container', 'window-sns')
            return;
        }

        promise().then(() => {
            dispatch(openPage('sns'));
        }).then(() => {
            removeActive('icon-container')
            toggleActiveByName('window-container', 'window-sns')
        }).then(() => {
            dispatch(pushItems({name: 'sns', thumbnail: MenuIcon.Folder}))
        })
    }

    return <Icon onDoubleClick={onDoubleClick} title={'SNS'} thumbnail={MenuIcon.Folder}/>
}

export default SNSIcon;
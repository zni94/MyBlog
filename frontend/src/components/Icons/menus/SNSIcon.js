import Icon from "../../Icon";
import {useDispatch, useSelector} from "react-redux";
import {promise} from "../../../modules/promise";
import {pushItems} from "../../../store/src/navItems";
import {removeActive} from "../../../modules/activeControl";
import {MenuIcon} from "../../../icons";
import {openPage} from "../../../store/src/togglePages";

const SNSIcon = () => {
    const dispatch = useDispatch();

    const {sns} = useSelector(state => state.togglePages)

    const onDoubleClick = () => {
        if (sns.isBool) {
            removeActive('icon-container')
            return;
        }

        promise().then(() => {
            dispatch(openPage('sns'))
        }).then(() => {
            removeActive('icon-container')
        }).then(() => {
            dispatch(pushItems({name: 'sns', thumbnail: MenuIcon.Folder}))
        })
    }

    return <Icon onDoubleClick={onDoubleClick} title={'SNS'} thumbnail={MenuIcon.Folder}/>
}

export default SNSIcon;
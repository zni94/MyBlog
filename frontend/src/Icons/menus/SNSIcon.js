import Icon from "../../components/Icon";
import {useDispatch, useSelector} from "react-redux";
import {openPage} from "../../store/src/togglePages";
import {promise} from "../../modules/promise";
import {pushItems} from "../../store/src/navItems";
import {removeActive, toggleActiveByName} from "../../modules/activeControl";

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
            dispatch(pushItems({name: 'sns', icon: 'PUBLIC'}))
        })
    }

    return (
        <Icon onDoubleClick={onDoubleClick} title={'SNS'}>
            <span className={'material-symbols-outlined'}>PUBLIC</span>
        </Icon>
    )
}

export default SNSIcon;
import Window from "../components/Window";
import {useDispatch} from "react-redux";
import {closePage} from "../store/src/togglePages";
import {promise} from "../modules/promise";
import {popItems} from "../store/src/navItems";
import TStoryIcon from "../Icons/sns/TStoryIcon";
import NaverIcon from "../Icons/sns/NaverIcon";

const SNS = () => {
    const dispatch = useDispatch();

    const onClose = (e) => {
        promise().then(() => {
            dispatch(closePage('sns'))
        }).then(() => {
            dispatch(popItems('sns'))
        })
    }

    return (
        <Window title={'SNS'} onClose={onClose} name={'sns'}>
            <div className={'contents-container'}>
                <div className={'contents'}>
                    <ul>
                        <li>
                            <TStoryIcon/>
                        </li>
                        <li>
                            <NaverIcon/>
                        </li>
                    </ul>
                </div>
            </div>
        </Window>
    )
}

export default SNS;
import Window from "../components/Window";
import {closePage} from "../store/src/togglePages";
import {useDispatch} from "react-redux";
import {promise} from "../modules/promise";
import {popItems} from "../store/src/navItems";

const Diary = () => {
    const dispatch = useDispatch();

    const onClose = (e) => {
        promise().then(() => {
            dispatch(closePage('diary'))
        }).then(() => {
            dispatch(popItems('diary'))
        })
    }

    return (
        <Window title={'Diary'} onClose={onClose}>
            <div className={'diary-container'}>
                <div className={'diary-contents'}>DIARY</div>
            </div>
        </Window>
    )
}

export default Diary;
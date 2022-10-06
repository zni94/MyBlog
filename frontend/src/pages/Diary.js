import Window from "../components/Window";
import {closePage} from "../store/src/togglePages";
import {useDispatch} from "react-redux";

const Diary = () => {
    const dispatch = useDispatch();

    const onClose = (e) => {
        dispatch(closePage('diary'))
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
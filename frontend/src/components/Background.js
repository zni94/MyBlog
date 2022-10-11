import NavBar from "./NavBar";
import {useSelector} from "react-redux";
import {Fragment} from "react";
import Modal from "./Modal";
import Diary from "../pages/Diary";

const Background = () => {
    const {home, profile, diary} = useSelector(state => state.togglePages);
    const {isModal} = useSelector(state => state.toggleModal);

    return (
        <Fragment>
            <div className={'background-items'}>
                <div>대충 Icon 자리</div>
            </div>
            <div className={'layout'}>
                {diary && <Diary/>}
                <NavBar/>
            </div>
            {isModal && <Modal/>}
        </Fragment>
    )
}

export default Background;
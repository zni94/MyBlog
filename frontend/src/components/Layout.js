import NavBar from "./NavBar";
import Home from "../pages/Home";
import {useSelector} from "react-redux";
import Profile from "../pages/Profile";
import Diary from "../pages/Diary";
import {Fragment} from "react";
import Modal from "./Modal";

const Layout = () => {
    const {home, profile, diary} = useSelector(state => state.togglePages);
    const {isModal} = useSelector(state => state.toggleModal);

    return (
        <Fragment>
            <div className={'layout'}>
                {home && <Home/>}
                {profile && <Profile/>}
                {diary && <Diary/>}
                <NavBar/>
            </div>
            {isModal && <Modal/>}
        </Fragment>
    )
}

export default Layout;
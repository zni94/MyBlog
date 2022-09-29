import NavBar from "./NavBar";
import Home from "../pages/Home";
import {useSelector} from "react-redux";
import Profile from "../pages/Profile";
import Diary from "../pages/Diary";

const Layout = () => {
    const {home, profile, diary} = useSelector(state => state.togglePages);

    return (
        <div className={'layout'}>
            {home && <Home/>}
            {profile && <Profile/>}
            {diary && <Diary/>}
            <NavBar/>
        </div>
    )
}

export default Layout;
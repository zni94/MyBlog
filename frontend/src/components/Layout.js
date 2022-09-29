import NavBar from "./NavBar";
import Home from "../pages/Home";
import {useSelector} from "react-redux";
import Profile from "../pages/Profile";

const Layout = () => {
    const {home, profile} = useSelector(state => state.togglePages);

    return (
        <div className={'layout'}>
            {home && <Home/>}
            {profile && <Profile/>}
            <NavBar/>
        </div>
    )
}

export default Layout;
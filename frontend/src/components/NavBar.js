import {useDispatch, useSelector} from "react-redux";
import {openPage} from "../store/src/togglePages";
import '../css/nav.css'
import TimeZone from "./TimeZone";

const NavBar = () => {
    const dispatch = useDispatch();
    const {profile, diary} = useSelector(state => state.togglePages);

    const onClick = (e) => {
        const value = e.currentTarget.dataset.value;
        dispatch(openPage(value));
    }

    return (
        <div className={'nav-container'}>
            <ul className={'menu-items'}>
                <li className={'menu-item'} onClick={onClick} data-value={'home'}>
                    <span className="material-symbols-outlined">HOME</span>
                </li>
                {profile && <li className={'menu-item'} onClick={onClick} data-value={'profile'}>
                    <span className="material-symbols-outlined">PERSON</span>
                </li>}
                {diary && <li className={'menu-item'} onClick={onClick} data-value={'diary'}>
                    <span className="material-symbols-outlined">IMPORT_CONTACTS</span>
                </li>}
            </ul>
            <TimeZone/>
        </div>
    )
}

export default NavBar;
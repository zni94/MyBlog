import {useDispatch} from "react-redux";
import {changePage} from "../store/src/togglePages";
import '../css/nav.css'
import TimeZone from "./TimeZone";

const NavBar = () => {
    const dispatch = useDispatch();

    const onClick = (e) => {
        const value = e.target.dataset.value;
        switch (value) {
            case 'home':
                dispatch(changePage('home'));
                break;
            case 'profile':
                dispatch(changePage('profile'));
                break;
            default:
                break;
        }
    }

    return (
        <div className={'nav-container'}>
            <ul className={'menu-items'}>
                <li className={'menu-item'} onClick={onClick} data-value={'home'}>
                    <span className="material-symbols-outlined">HOME</span>
                </li>
                <li className={'menu-item'} onClick={onClick} data-value={'profile'}>
                    <span className="material-symbols-outlined">
PERSON
</span>
                </li>
                <li className={'menu-item'} onClick={onClick} data-value={'diary'}>
                    <span className="material-symbols-outlined">
import_contacts
</span>
                </li>
            </ul>
            <TimeZone/>
        </div>
    )
}

export default NavBar;
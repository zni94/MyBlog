import {useDispatch, useSelector} from "react-redux";
import {openPage} from "../store/src/togglePages";
import '../css/nav.css'
import TimeZone from "./TimeZone";

const NavBar = () => {
    const dispatch = useDispatch();

    const {items} = useSelector(state => state.navItems);

    const onClick = (e) => {
        const value = e.currentTarget.dataset.value;
        dispatch(openPage(value));
    }

    return (
        <div className={'nav-container'}>
            <ul className={'menu-items'}>
                {items.length > 0 &&
                    items.map((contents, index) => (
                        <li key={index}
                            className={'menu-item'}
                            onClick={onClick}
                            data-value={contents.name}
                        >
                            <span className={'material-symbols-outlined'}>{contents.icon}</span>
                        </li>)
                    )}
            </ul>
            <TimeZone/>
        </div>
    )
}

export default NavBar;
import {useDispatch, useSelector} from "react-redux";
import '../css/nav.css'
import TimeZone from "./TimeZone";
import {promise} from "../modules/promise";

const NavBar = () => {
    const dispatch = useDispatch();

    const {items} = useSelector(state => state.navItems);

    const hideHandler = (e) => {
        const name = e.currentTarget.dataset.value;
        console.log('name', name)
        const container = document.getElementsByName('window-' + name)[0];
        promise().then(() => {
            container.classList.remove('hide');
        })
    }

    return (
        <div className={'nav-container'}>
            <ul className={'menu-items'}>
                {items.length > 0 &&
                    items.map((contents, index) => (
                        <li key={index}
                            className={'menu-item'}
                            data-value={contents.name}
                            onMouseDown={hideHandler}
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
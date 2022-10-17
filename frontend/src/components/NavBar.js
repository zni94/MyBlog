import {useSelector} from "react-redux";
import '../css/nav.css'
import TimeZone from "./TimeZone";
import {promise} from "../modules/promise";
import {removeActive, toggleActiveByName} from "../modules/activeControl";

const NavBar = () => {
    const {items} = useSelector(state => state.navItems);

    const hideHandler = (e) => {
        const name = e.currentTarget.dataset.value;
        const container = document.getElementsByName('window-' + name)[0];

        promise().then(() => {
            container.classList.remove('hide');
        }).then(() => {
            removeActive('icon-container')
            toggleActiveByName('window-container', 'window-' + name);
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
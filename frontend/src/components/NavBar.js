import {useSelector} from "react-redux";
import '../css/nav.css'
import TimeZone from "./TimeZone";
import {promise} from "../modules/promise";
import {removeActive, toggleActiveByName} from "../modules/activeControl";
import Calendar from "./Calendar";

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
        <>
            <Calendar/>
            <div className={'nav-container'}>
                <ul className={'menu-items'}>
                    {items.length > 0 &&
                        items.map((contents, index) => (
                            <li key={index}
                                className={'menu-item'}
                                data-value={contents.name}
                                onMouseDown={hideHandler}
                            >
                                <svg width={36} height={36}>
                                    <image width={36} height={36} href={contents.thumbnail}/>
                                </svg>
                            </li>)
                        )}
                </ul>
                <TimeZone/>
            </div>
        </>
    )
}

export default NavBar;
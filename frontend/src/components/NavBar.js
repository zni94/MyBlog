import {useSelector} from "react-redux";
import '../css/nav.css'
import TimeZone from "./TimeZone";
import {promise} from "../modules/promise";
import {removeActive, toggleActiveByName} from "../modules/activeControl";
import Calendar from "./Calendar";

const NavBar = () => {
    const {items} = useSelector(state => state.navItems);

    const hideHandler = (e) => {
        const name = 'window-' + e.currentTarget.dataset.value;
        if (name === 'window-search') return;

        const container = document.getElementsByName(name)[0];

        promise().then(() => {
            container.classList.remove('hide');
        }).then(() => {
            removeActive('icon-container')
            toggleActiveByName('window-container', name)
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
                                <svg width={28} height={28}>
                                    <image width={28} height={28} href={contents.thumbnail}/>
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
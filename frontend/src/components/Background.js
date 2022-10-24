import NavBar from "./NavBar";
import {useSelector} from "react-redux";
import Modal from "./Modal";
import '../css/background.css';
import SNSWindow from "./windows/SNSWindow";
import SNSIcon from "./Icons/menus/SNSIcon";
import BackgroundWindow from "./windows/BackgroundWindow";
import IDEIcon from "./Icons/menus/IDEIcon";
import IDEWindow from "./windows/IDEWindow";

const Background = () => {
    const {background, sns, ide} = useSelector(state => state.togglePages);
    const {isModal} = useSelector(state => state.toggleModal);

    const Icons = [
        {icon: <SNSIcon key={0}/>},
        {icon: <IDEIcon key={1}/>},
    ]

    const Windows = [
        {bool: background.isBool, window: <BackgroundWindow key={0}/>},
        {bool: sns.isBool, window: <SNSWindow key={1}/>},
        {bool: ide.isBool, window: <IDEWindow key={2}/>},
    ]

    return (
        <div className={'background-container'}>
            <div className={'background-items'}>
                {Icons.map(item => (
                    item.icon
                ))}
            </div>
            <div className={'layout'}>
                {Windows.map(item => (
                    item.bool && item.window
                ))}
                <NavBar/>
            </div>
            {isModal && <Modal/>}
        </div>
    )
}

export default Background;
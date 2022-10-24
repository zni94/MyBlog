import NavBar from "./NavBar";
import {useSelector} from "react-redux";
import Modal from "./Modal";
import '../css/background.css';
import SNSWindow from "./windows/SNSWindow";
import SNSIcon from "./Icons/menus/SNSIcon";
import IDEIcon from "./Icons/menus/IDEIcon";
import IDEWindow from "./windows/IDEWindow";

const Background = () => {
    const {sns, ide} = useSelector(state => state.togglePages);
    const {isModal} = useSelector(state => state.toggleModal);

    const Icons = [
        {icon: <SNSIcon key={0}/>},
        {icon: <IDEIcon key={1}/>},
    ]

    const Windows = [
        {bool: sns.isBool, window: <SNSWindow key={0} target={'sns'}/>},
        {bool: ide.isBool, window: <IDEWindow key={1} target={'ide'}/>},
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
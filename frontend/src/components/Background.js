import NavBar from "./NavBar";
import {useSelector} from "react-redux";
import Modal from "./Modal";
import '../css/background.css';
import SNSWindow from "./windows/SNSWindow";
import SNSIcon from "./folder/SNSIcon";
import IDEIcon from "./folder/IDEIcon";
import IDEWindow from "./windows/IDEWindow";
import DocumentIcon from "./folder/DocumentIcon";
import DocumentWindow from "./windows/DocumentWindow";
import ChromeIcon from "./folder/ChromeIcon";
import WebViewer from "./viewer/WebViewer";

const Background = () => {
    const {sns, ide, document} = useSelector(state => state.togglePages);
    const {isModal} = useSelector(state => state.toggleModal);
    const {isWeb, url} = useSelector(state => state.toggleWeb);

    const Icons = [
        {icon: <SNSIcon key={0}/>},
        {icon: <IDEIcon key={1}/>},
        {icon: <DocumentIcon key={2}/>},
        {icon: <ChromeIcon key={3}/>},
    ]

    const Windows = [
        {bool: sns.isBool, window: <SNSWindow key={0} target={'sns'}/>},
        {bool: ide.isBool, window: <IDEWindow key={1} target={'ide'}/>},
        {bool: document.isBool, window: <DocumentWindow key={2} target={'document'}/>},
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
            {isWeb && <WebViewer/>}
        </div>
    )
}

export default Background;
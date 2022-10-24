import {useSelector} from "react-redux";
import ControlWindow from "./ControlWindow";

const IDEWindow = ({target}) => {
    const {ide} = useSelector(state => state.togglePages);

    return <ControlWindow obj={ide} pageName={'ide'} defaultPath={['C:', 'background', 'ide']}
                          target={'ide'}/>
}

export default IDEWindow;
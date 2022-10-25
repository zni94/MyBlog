import {useSelector} from "react-redux";
import ControlWindow from "./ControlWindow";

const SNSWindow = () => {
    const {sns} = useSelector(state => state.togglePages);

    return <ControlWindow obj={sns} pageName={'sns'} defaultPath={['C:', 'background', 'sns']}
                          target={'sns'}/>
}

export default SNSWindow;
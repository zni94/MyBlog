import {useSelector} from "react-redux";
import ControlMenu from "./ControlMenu";

const IDEIcon = () => {
    const {ide} = useSelector(state => state.togglePages)

    return <ControlMenu obj={ide} pageName={'ide'} title={'IDE'}/>
}

export default IDEIcon;
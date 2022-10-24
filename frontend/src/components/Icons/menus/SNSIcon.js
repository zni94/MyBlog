import {useSelector} from "react-redux";
import ControlMenu from "./ControlMenu";

const SNSIcon = () => {
    const {sns} = useSelector(state => state.togglePages)

    return <ControlMenu obj={sns} pageName={'sns'} title={'SNS'}/>
}

export default SNSIcon;
import {useSelector} from "react-redux";
import ControlMenu from "./ControlMenu";

const DocumentIcon = () => {
    const {document} = useSelector(state => state.togglePages)

    return <ControlMenu obj={document} pageName={'document'} title={'Document'}/>
}

export default DocumentIcon;
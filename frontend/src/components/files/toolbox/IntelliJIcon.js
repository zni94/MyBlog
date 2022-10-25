import Icon from "../../Icon";
import {IDE_Icons} from "../../../icons";

const IntelliJIcon = () => {
    const onDoubleClick = (e) => {
    }

    return <Icon title={'IntelliJ IDEA'} onDoubleClick={onDoubleClick} thumbnail={IDE_Icons.IntelliJ}/>
}

export default IntelliJIcon
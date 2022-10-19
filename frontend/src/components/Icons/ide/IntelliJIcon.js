import Icon from "../../Icon";
import {IDEIcon} from "../../../icons";

const IntelliJIcon = () => {
    const onDoubleClick = (e) => {
        try {
            const element = document.createElement('a');
            element.setAttribute('href', 'IntelliJ://');
            element.click();
        } catch (err) {
            console.log(err);
        }
    }

    return <Icon title={'IntelliJ'} onDoubleClick={onDoubleClick} thumbnail={IDEIcon.IntelliJ}/>
}

export default IntelliJIcon
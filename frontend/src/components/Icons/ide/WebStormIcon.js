import Icon from "../../Icon";
import {IDEIcon} from "../../../icons";

const WebStormIcon = () => {
    const onDoubleClick = (e) => {
        try {
            const element = document.createElement('a');
            element.setAttribute('href', 'WebStorm://');
            element.click();
        } catch (err) {
            console.log(err);
        }
    }

    return <Icon title={'WebStorm'} onDoubleClick={onDoubleClick} thumbnail={IDEIcon.WebStorm}/>
}

export default WebStormIcon
import Icon from "../../Icon";
import {IDE_Icons} from "../../../icons";

const WebStormIcon = () => {
    const onDoubleClick = (e) => {
        /**
         * TODO::
         *   case 1 : Click 시 WebStorm이 실행되게 할..까?
         */
    }

    return <Icon title={'WebStorm'} onDoubleClick={onDoubleClick} thumbnail={IDE_Icons.WebStorm}/>
}

export default WebStormIcon
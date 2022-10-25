import Icon from "../../Icon";
import {IDE_Icons} from "../../../icons";

const VSCodeIcon = () => {
    const onDoubleClick = (e) => {
    }

    return <Icon title={'Visual Studio Code'} onDoubleClick={onDoubleClick} thumbnail={IDE_Icons.VSCode}/>
}

export default VSCodeIcon
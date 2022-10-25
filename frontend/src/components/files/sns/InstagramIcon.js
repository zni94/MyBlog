import Icon from "../../Icon";
import {SNS_Icons} from "../../../icons";

const InstagramIcon = () => {
    const onDoubleClick = (e) => {
        return window.open('https://www.instagram.com/zni._.inz/', '_blank')
    }

    return <Icon title={'Instagram'} onDoubleClick={onDoubleClick} thumbnail={SNS_Icons.Instagram}/>

}

export default InstagramIcon
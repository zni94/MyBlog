import Icon from "../../Icon";
import {SNSIcon} from "../../../icons";

const InstagramIcon = () => {
    const onDoubleClick = (e) => {
        return window.open('https://www.instagram.com/zni._.inz/', '_blank')
    }

    return <Icon title={'Instagram'} onDoubleClick={onDoubleClick} thumbnail={SNSIcon.Instagram}/>

}

export default InstagramIcon
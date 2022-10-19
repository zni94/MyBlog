import Icon from "../../Icon";
import {SNSIcon} from "../../../icons";

const TStoryIcon = () => {
    const onDoubleClick = (e) => {
        return window.open('https://developer-zni.tistory.com', '_blank')
    }

    return <Icon title={'T-Story'} onDoubleClick={onDoubleClick} thumbnail={SNSIcon.TStory}/>
}

export default TStoryIcon
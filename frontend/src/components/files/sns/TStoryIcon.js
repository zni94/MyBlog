import Icon from "../../Icon";
import {SNS_Icons} from "../../../icons";

const TStoryIcon = () => {
    const onDoubleClick = (e) => {
        return window.open('https://developer-zni.tistory.com', '_blank')
    }

    return <Icon title={'T-Story'} onDoubleClick={onDoubleClick} thumbnail={SNS_Icons.TStory}/>
}

export default TStoryIcon
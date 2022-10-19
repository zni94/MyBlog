import Icon from "../../Icon";
import {GameIcon} from "../../../icons";

const MapleStoryIcon = () => {
    const onDoubleClick = (e) => {
        return window.open('https://maplestory.nexon.com/Home/Main', '_blank')
    }

    return <Icon title={'MapleStory'} onDoubleClick={onDoubleClick} thumbnail={GameIcon.MapleStory}/>
}

export default MapleStoryIcon
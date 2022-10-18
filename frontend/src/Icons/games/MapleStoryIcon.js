import Icon from "../../components/Icon";
import MapleStory from '../../lib/img/mapleStory.png'

const MapleStoryIcon = () => {
    const onDoubleClick = (e) => {
        return window.open('https://maplestory.nexon.com/Home/Main', '_blank')
    }

    return <Icon title={'MapleStory'} onDoubleClick={onDoubleClick} thumbnail={MapleStory}/>
}

export default MapleStoryIcon
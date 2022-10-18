import Icon from "../../components/Icon";
import TStory from '../../lib/img/tStory.png'

const TStoryIcon = () => {
    const onDoubleClick = (e) => {
        return window.open('https://developer-zni.tistory.com', '_blank')
    }

    return <Icon title={'T-Story'} onDoubleClick={onDoubleClick} thumbnail={TStory}/>
}

export default TStoryIcon
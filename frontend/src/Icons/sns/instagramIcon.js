import Icon from "../../components/Icon";
import Instagram from '../../lib/img/instagram.png'

const InstagramIcon = () => {
    const onDoubleClick = (e) => {
        return window.open('https://www.instagram.com/zni._.inz/', '_blank')
    }

    return <Icon title={'Instagram'} onDoubleClick={onDoubleClick} thumbnail={Instagram}/>

}

export default InstagramIcon
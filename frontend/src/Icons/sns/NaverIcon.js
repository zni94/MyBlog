import Icon from "../../components/Icon";
import NaverBlog from '../../lib/img/naverBlog.png'

const NaverIcon = () => {
    const onDoubleClick = (e) => {
        return window.open('https://blog.naver.com/free_zni', '_blank')
    }

    return <Icon title={'Naver Blog'} onDoubleClick={onDoubleClick} thumbnail={NaverBlog}/>
}

export default NaverIcon
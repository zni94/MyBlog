import Icon from "../../Icon";
import {SNSIcon} from "../../../icons";

const BlogIcon = () => {
    const onDoubleClick = (e) => {
        return window.open('https://blog.naver.com/free_zni', '_blank')
    }

    return <Icon title={'Naver Blog'} onDoubleClick={onDoubleClick} thumbnail={SNSIcon.Blog}/>
}

export default BlogIcon
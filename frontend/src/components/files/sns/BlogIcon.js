import Icon from "../../Icon";
import {SNS_Icons} from "../../../icons";

const BlogIcon = () => {
    const onDoubleClick = (e) => {
        return window.open('https://blog.naver.com/free_zni', '_blank')
    }

    return <Icon title={'Naver Blog'} onDoubleClick={onDoubleClick} thumbnail={SNS_Icons.Blog}/>
}

export default BlogIcon
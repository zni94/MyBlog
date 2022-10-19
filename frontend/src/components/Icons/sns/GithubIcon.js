import Icon from "../../Icon";
import {SNSIcon} from "../../../icons";

const GithubIcon = () => {
    const onDoubleClick = (e) => {
        return window.open('https://github.com/zni94', '_blank')
    }

    return <Icon title={'Github'} onDoubleClick={onDoubleClick} thumbnail={SNSIcon.Github}/>

}

export default GithubIcon
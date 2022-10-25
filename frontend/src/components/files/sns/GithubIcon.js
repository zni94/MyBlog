import Icon from "../../Icon";
import {SNS_Icons} from "../../../icons";

const GithubIcon = () => {
    const onDoubleClick = (e) => {
        return window.open('https://github.com/zni94', '_blank')
    }

    return <Icon title={'Github'} onDoubleClick={onDoubleClick} thumbnail={SNS_Icons.Github}/>

}

export default GithubIcon
import {useDispatch} from "react-redux";
import Icon from "../Icon";
import {findPath} from "../../modules/browserControl";

const ControlPage = (props) => {
    const {obj} = props;

    const dispatch = useDispatch();

    const onDoubleClick = (e) => {
        findPath(dispatch, e, 'windowContainer');
    }

    return (
        <div className={'contents-container'}>
            <div className={'contents'}>
                <ul>
                    {obj.items.length > 0 &&
                        obj.items.map((item, index) => (
                            item.type === 'folder' ?
                                <li key={index}>
                                    <Icon onDoubleClick={onDoubleClick} title={item.title} thumbnail={item.thumbnail}
                                          path={item.path.join('/')}/>
                                </li> :
                                <li key={index}>
                                    {item.file}
                                </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default ControlPage;
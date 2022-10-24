import Icon from "../Icon";
import {useDispatch} from "react-redux";
import {changePath} from "../../store/src/togglePages";
import {background} from "../../store/src/fileNavigator";


const Background = () => {
    const dispatch = useDispatch();

    const onDoubleClick = (e) => {
        const path = e.currentTarget.dataset.path;

        dispatch(changePath('background', path));
    }

    return (
        <div className={'contents-container'}>
            <div className={'contents'}>
                <ul>
                    {background.items.length > 0 &&
                        background.items.map((item, index) => (
                            item.type === 'folder' ?
                                <li key={index}>
                                    <Icon onDoubleClick={onDoubleClick} title={item.title} thumbnail={item.thumbnail}
                                          path={item.path}/>
                                </li> :
                                <li key={index}>
                                    <Icon onDoubleClick={onDoubleClick} title={item.title} thumbnail={item.thumbnail}
                                          path={item.path}/>
                                </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Background;
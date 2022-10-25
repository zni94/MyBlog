import {changePath, closePage} from "../../store/src/togglePages";
import {useDispatch} from "react-redux";
import {promise} from "../../modules/promise";
import {popItems} from "../../store/src/navItems";
import {useEffect, useState} from "react";
import {isNull} from "../../modules/isNull";
import {findPage} from "../../modules/browserControl";
import Window from "../Window";

const ControlWindow = (props) => {
    const {obj, pageName, defaultPath, target} = props;

    const dispatch = useDispatch();

    const [page, setPage] = useState(findPage(obj));

    useEffect(() => {
        setPage(findPage(obj))
    }, [obj, obj.path])

    const onClose = (e) => {
        promise().then(() => {
            dispatch(closePage(pageName))
        }).then(() => {
            dispatch(popItems(pageName))
        }).then(() => {
            dispatch(changePath(pageName, defaultPath))
        })
    }

    const topHandler = () => {
        obj.path.pop();
        const newPage = findPage(obj);
        if (!isNull(newPage)) setPage((newPage));
    }

    return (
        <Window onClose={onClose} topHandler={topHandler} view={page} path={obj.path} target={target}>
            {page.contents}
        </Window>
    )
}

export default ControlWindow;
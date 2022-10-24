import Window from "../Window";
import {closePage} from "../../store/src/togglePages";
import {useDispatch, useSelector} from "react-redux";
import {promise} from "../../modules/promise";
import {popItems} from "../../store/src/navItems";
import {background, items} from "../../store/src/fileNavigator";
import {useEffect, useState} from "react";


const BackgroundWindow = () => {
    const dispatch = useDispatch();

    const {background} = useSelector(state => state.togglePages);
    const [page, setPage] = useState(items.find(state => state.path === background.path));

    useEffect(() => {
        setPage(items.find(state => state.path === background.path))
    }, [background.path])

    const onClose = (e) => {
        promise().then(() => {
            dispatch(closePage('background'))
        }).then(() => {
            dispatch(popItems('background'))
        })
    }

    return (
        <Window onClose={onClose} name={page.name} title={page.title} thumbnail={page.thumbnail}>
            {page.contents}
        </Window>
    )
}

export default BackgroundWindow;
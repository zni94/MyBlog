import Window from "../Window";
import {useDispatch, useSelector} from "react-redux";
import {closePage} from "../../store/src/togglePages";
import {promise} from "../../modules/promise";
import {popItems} from "../../store/src/navItems";
import {items, sns} from "../../store/src/fileNavigator";
import {useEffect, useState} from "react";

const SNSWindow = () => {
    const dispatch = useDispatch();

    const {sns} = useSelector(state => state.togglePages);
    const [page, setPage] = useState(items.find(state => state.path === sns.path));

    useEffect(() => {
        setPage(items.find(state => state.path === sns.path))
    }, [sns.path])

    const onClose = (e) => {
        promise().then(() => {
            dispatch(closePage('sns'))
        }).then(() => {
            dispatch(popItems('sns'))
        })
    }

    return (
        <Window onClose={onClose} name={page.name} title={page.title} thumbnail={page.thumbnail}>
            {page.contents}
        </Window>
    )
}

export default SNSWindow;
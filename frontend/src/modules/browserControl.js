import {items} from "../store/src/fileNavigator";
import {findParentNode} from "./activeControl";
import {changePath} from "../store/src/togglePages";

export const findPage = (obj) => {
    return items.find(state => state.path.join('/') === obj.path.join('/'))
}

export const findPath = (dispatch, e, findName) => {
    const target = findParentNode(e.target, findName).dataset.target;
    const path = e.currentTarget.dataset.path.split('/');

    dispatch(changePath(target, path));
}
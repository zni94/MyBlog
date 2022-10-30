import { items } from '../store/src/fileNavigator';
import { findParentNode } from './activeControl';
import { changePath } from '../store/src/togglePages';
import { isNull } from './isNull';

export const findPage = (obj) => {
  if (!isNull(obj))
    return items.find((state) => state.path.join('/') === obj.path.join('/'));
};

export const findPath = (dispatch, target, findName) => {
  const parent = findParentNode(target, findName).dataset.target;
  const path = target.dataset.path.split('/');

  dispatch(changePath(parent, path));
};

import { items } from '../store/src/fileNavigator';
import { findParentNode } from './activeControl';
import { changePath } from '../store/src/togglePages';
import { isNull } from './isNull';

export const findPageObj = (arr, pageName) => {
  return arr.find((state) => state.pageName === pageName);
};

export const findPage = (obj) => {
  if (!isNull(obj))
    return items.find((state) => state.path.join('/') === obj.path.join('/'));
};

export const findPath = (dispatch, e, findName) => {
  const target = findParentNode(e.target, findName).dataset.target;
  const path = e.currentTarget.dataset.path.split('/');

  console.log('FIND TARGET', target);
  console.log('FIND PATH', path);

  dispatch(changePath(target, path));
};

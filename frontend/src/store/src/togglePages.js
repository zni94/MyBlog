import { findPageObj } from '../../modules/browserControl';

export const OPEN = 'OPEN/PAGE';
export const CLOSE = 'CLOSE/PAGE';
export const CHANGE = 'CHANGE/PATH';

export const openPage = (pageName) => ({
  type: OPEN,
  pageName,
});
export const closePage = (pageName) => ({
  type: CLOSE,
  pageName,
});
export const changePath = (pageName, path) => ({
  type: CHANGE,
  pageName,
  path,
});

export const pages = {
  items: [
    {
      pageName: 'ide',
      isBool: false,
      path: ['C:', 'background', 'ide'],
    },
  ],
};

const togglePages = (state = pages, action) => {
  switch (action.type) {
    case OPEN:
      const open_arr = returnState(action.pageName, 'OPEN');
      return {
        ...state,
        items: open_arr,
      };
    case CLOSE:
      const close_arr = returnState(action.pageName, 'CLOSE');
      return {
        ...state,
        items: close_arr,
      };
    case CHANGE:
      const change_path = returnPath(action.pageName, action.path);
      return {
        ...state,
        items: change_path,
      };
    default:
      return state;
  }
};

const returnState = (pageName, type) => {
  const state = pages.items;
  const obj = findPageObj(state, pageName);

  switch (type) {
    case 'OPEN':
      obj.isBool = true;
      break;
    case 'CLOSE':
      obj.isBool = false;
      break;
    default:
      break;
  }

  return state;
};

const returnPath = (pageName, path) => {
  const state = pages.items;
  const obj = findPageObj(state, pageName);

  obj.path = path;

  return state;
};

export default togglePages;

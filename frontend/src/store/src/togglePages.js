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
  ide: {
    pageName: 'ide',
    isBool: false,
    path: ['C:', 'background', 'ide'],
  },
  jetbrain: {
    pageName: 'jetbrain',
    isBool: false,
    path: ['C:', 'background', 'ide', 'jetbrain'],
  },
};

const togglePages = (state = pages, action) => {
  switch (action.type) {
    case OPEN:
      const open_obj = returnState(action.pageName, 'OPEN');
      return {
        ...state,
        ide: open_obj.ide,
        jetbrain: open_obj.jetbrain,
      };
    case CLOSE:
      const close_obj = returnState(action.pageName, 'CLOSE');
      return {
        ...state,
        ide: close_obj.ide,
        jetbrain: close_obj.jetbrain,
      };
    case CHANGE:
      const change_path = returnPath(action.pageName, action.path);
      return {
        ...state,
        ide: change_path.ide,
        jetbrain: change_path.jetbrain,
      };
    default:
      return state;
  }
};

const returnState = (pageName, type) => {
  const state = pages;

  switch (type) {
    case 'OPEN':
      state[pageName].isBool = true;
      break;
    case 'CLOSE':
      state[pageName].isBool = false;
      break;
    default:
      break;
  }

  return state;
};

const returnPath = (pageName, path) => {
  const state = pages;

  state[pageName].path = path;

  return state;
};

export default togglePages;

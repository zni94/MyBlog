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
};

const togglePages = (state = pages, action) => {
  switch (action.type) {
    case OPEN:
      const open_obj = returnState(action.pageName, 'OPEN');
      return {
        ...state,
        ide: open_obj.ide,
      };
    case CLOSE:
      const close_obj = returnState(action.pageName, 'CLOSE');
      return {
        ...state,
        ide: close_obj.ide,
      };
    case CHANGE:
      const change_path = returnPath(action.pageName, action.path);
      return {
        ...state,
        ide: change_path.ide,
      };
    default:
      return state;
  }
};

const returnState = (pageName, type) => {
  const state = pages;
  const keys = Object.keys(pages);

  switch (type) {
    case 'OPEN':
      keys.forEach((key) => {
        if (key === pageName) state[key].isBool = true;
      });
      break;
    case 'CLOSE':
      keys.forEach((key) => {
        if (key === pageName) state[key].isBool = false;
      });
      break;
    default:
      break;
  }

  return state;
};

const returnPath = (pageName, path) => {
  const state = pages;
  const keys = Object.keys(pages);

  keys.forEach((key) => {
    if (key === pageName) state[key].path = path;
  });

  return state;
};

export default togglePages;

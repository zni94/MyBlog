const PUSH_WEB = 'PUSH/WEB';
const POP_WEB = 'POP/WEB';

export const pushWeb = (obj) => ({
  type: PUSH_WEB,
  obj,
});
export const popWeb = (pageName) => ({
  type: POP_WEB,
  pageName,
});

const PUSH_TASK = 'PUSH/TASK';
const POP_TASK = 'POP/TASK';

export const pushTask = (obj) => ({
  type: PUSH_TASK,
  obj,
});
export const popTask = (pageName) => ({
  type: POP_TASK,
  pageName,
});

const initialState = {
  windows: [],
  viewer: [],
  tasks: [],
};

const toggleItems = (state = initialState, action) => {
  switch (action.type) {
    case PUSH_WEB:
      return {
        ...state,
        windows: [...state.windows, action.obj],
      };
    case POP_WEB:
      return {
        ...state,
        windows: [...state.windows].filter(
          (state) => state.pageName !== action.pageName,
        ),
      };
    case PUSH_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.obj],
      };
    case POP_TASK:
      return {
        ...state,
        tasks: [...state.tasks].filter(
          (state) => state.pageName !== action.pageName,
        ),
      };
    default:
      return state;
  }
};

export default toggleItems;

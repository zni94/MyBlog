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
  viewer: [],
  tasks: [],
};

const toggleItems = (state = initialState, action) => {
  switch (action.type) {
    case PUSH_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.obj],
      };
    case POP_TASK:
      const returnTasks = returnItems([...state.tasks], action.pageName);
      return {
        ...state,
        tasks: returnTasks,
      };
    default:
      return state;
  }
};

export default toggleItems;

const returnItems = (arr, pageName) => {
  const prevArr = [...arr];
  const index = prevArr.findIndex((state) => state.pageName === pageName);

  prevArr.splice(index, 1);
  const nextArr = prevArr;

  return nextArr;
};

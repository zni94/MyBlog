import { Menu_Icons } from '../../icons';

const PUSH = 'PUSH/NAV';
const POP = 'POP/NAV';

export const pushNav = (obj) => ({
  type: PUSH,
  obj,
});
export const popNav = (name) => ({
  type: POP,
  name,
});

const initialState = {
  taskBar: { pageName: 'task', thumbnail: Menu_Icons.TaskBar },
  search: { pageName: 'search', thumbnail: Menu_Icons.Search },
  items: [],
};

const navItems = (state = initialState, action) => {
  switch (action.type) {
    case PUSH:
      return {
        ...state,
        items: [...state.items, action.obj],
      };
    case POP:
      return {
        ...state,
        items: state.items.filter((state) => state.name !== action.name),
      };
    default:
      return state;
  }
};

export default navItems;

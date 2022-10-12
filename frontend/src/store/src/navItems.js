export const PUSH = 'PUSH/ITEMS';
export const POP = 'POP/ITEMS';

export const pushItems = (obj) => ({
    type: PUSH,
    obj
})
export const popItems = (name) => ({
    type: POP,
    name
})

const initialState = {
    items: [
        {name: 'search', icon: 'SEARCH'}
    ]
}

const navItems = (state = initialState, action) => {
    switch (action.type) {
        case PUSH:
            return {
                ...state,
                items: state.items.concat(action.obj)
            };
        case POP:
            return {
                ...state,
                items: state.items.filter(state => state.name !== action.name)
            }
        default:
            return state;
    }
}

export default navItems;
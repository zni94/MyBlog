export const OPEN = 'OPEN/PAGE';
export const CLOSE = 'CLOSE/PAGE';

export const openPage = (pageName) => ({
    type: OPEN,
    pageName,
})
export const closePage = (pageName) => ({
    type: CLOSE,
    pageName
})

const initialState = {
    home: false,
    profile: false,
    diary: true,
}

const togglePages = (state = initialState, action) => {
    switch (action.type) {
        case OPEN:
            const open_obj = returnState(action.pageName, 'OPEN');
            return {
                ...state,
                home: open_obj.home,
                profile: open_obj.profile,
                diary: open_obj.diary,
            }
        case CLOSE:
            const close_obj = returnState(action.pageName, 'CLOSE');
            return {
                ...state,
                home: close_obj.home,
                profile: close_obj.profile,
                diary: close_obj.diary,
            }
        default:
            return state
    }
}

const returnState = (pageName, type) => {
    const state = {};
    const keys = Object.keys(initialState);

    switch (type) {
        case "OPEN":
            keys.forEach(key => {
                if (key === pageName) state[key] = true;
            })
            break;
        case "CLOSE":
            keys.forEach(key => {
                if (key === pageName) state[key] = false;
            })
            break;
        default:
            break;
    }
    
    return state;
}

export default togglePages;
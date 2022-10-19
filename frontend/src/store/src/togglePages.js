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
    profile: false,
    diary: false,
    game: false,
    sns: false,
    ide: false,
}

const togglePages = (state = initialState, action) => {
    switch (action.type) {
        case OPEN:
            const open_obj = returnState(action.pageName, 'OPEN');
            return {
                ...state,
                profile: open_obj.profile,
                diary: open_obj.diary,
                game: open_obj.game,
                sns: open_obj.sns,
                ide: open_obj.ide,
            }
        case CLOSE:
            const close_obj = returnState(action.pageName, 'CLOSE');
            return {
                ...state,
                profile: close_obj.profile,
                diary: close_obj.diary,
                game: close_obj.game,
                sns: close_obj.sns,
                ide: close_obj.ide,
            }
        default:
            return state
    }
}

const returnState = (pageName, type) => {
    const state = initialState;
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
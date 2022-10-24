export const OPEN = 'OPEN/PAGE';
export const CLOSE = 'CLOSE/PAGE';
export const CHANGE = 'CHANGE/PATH';

export const openPage = (pageName) => ({
    type: OPEN,
    pageName,
})
export const closePage = (pageName) => ({
    type: CLOSE,
    pageName,
})
export const changePath = (pageName, path) => ({
    type: CHANGE,
    pageName,
    path,
})

const initialState = {
    sns: {isBool: false, path: ['C:', 'background', 'sns']},
    ide: {isBool: false, path: ['C:', 'background', 'ide']},
}

const togglePages = (state = initialState, action) => {
    switch (action.type) {
        case OPEN:
            const open_obj = returnState(action.pageName, 'OPEN');
            return {
                ...state,
                sns: open_obj.sns,
                ide: open_obj.ide,
            }
        case CLOSE:
            const close_obj = returnState(action.pageName, 'CLOSE');
            return {
                ...state,
                sns: close_obj.sns,
                ide: close_obj.ide,
            }
        case CHANGE:
            const change_path = returnPath(action.pageName, action.path)
            return {
                ...state,
                sns: change_path.sns,
                ide: change_path.ide
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
                if (key === pageName) state[key].isBool = true;
            })
            break;
        case "CLOSE":
            keys.forEach(key => {
                if (key === pageName) state[key].isBool = false;
            })
            break;
        default:
            break;
    }

    return state;
}

const returnPath = (pageName, path) => {
    const state = initialState;
    const keys = Object.keys(initialState);

    keys.forEach(key => {
        if (key === pageName) state[key].path = path;
    })

    return state;
}

export default togglePages;
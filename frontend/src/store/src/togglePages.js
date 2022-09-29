export const CHANGE = 'CHANGE/PAGE';
export const changePage = (pageName) => ({
    type: CHANGE,
    pageName,
})

const initialState = {
    home: true,
    profile: false,
    diary: false,
}

const togglePages = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE:
            const obj = returnState(action.pageName);
            return {
                ...state,
                home: obj.home,
                profile: obj.profile,
                diary: obj.diary,
            }
        default:
            return state
    }
}

const returnState = (pageName) => {
    const state = {};
    const keys = Object.keys(initialState);
    keys.forEach(key => {
        state[key] = key === pageName ? true : false;
    })

    return state;
}

export default togglePages;
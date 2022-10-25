export const CHANGE = 'WEB/CHANGE';

export const changeWeb = (isWeb, url) => ({
    type: CHANGE,
    isWeb,
    url,
})


const initialState = {
    isWeb: false,
    url: '',
}

const toggleWeb = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE:
            return {
                ...state,
                isWeb: action.isWeb,
                url: action.url,
            }
        default:
            return state
    }
}

export default toggleWeb;
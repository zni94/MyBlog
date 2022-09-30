export const CHANGE = 'MODAL/CHANGE';

export const changeModal = (isModal) => ({
    type: CHANGE,
    isModal
})


const initialState = {
    isModal: true,
}

const toggleModal = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE:
            return {
                ...state,
                isModal: action.isModal,
            }
        default:
            return state
    }
}

export default toggleModal;
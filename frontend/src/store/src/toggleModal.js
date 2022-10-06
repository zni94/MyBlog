export const CHANGE = 'MODAL/CHANGE';

export const changeModal = (isModal, msg, isConfirm) => ({
    type: CHANGE,
    isModal,
    msg,
    isConfirm
})


const initialState = {
    isModal: false,
    msg: '',
    isConfirm: false,
}

const toggleModal = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE:
            return {
                ...state,
                isModal: action.isModal,
                msg: action.msg,
                isConfirm: action.isConfirm,
            }
        default:
            return state
    }
}

export default toggleModal;
import '../css/modal.css'
import {useSelector} from "react-redux";

const Modal = () => {
    const {msg, isConfirm} = useSelector(state => state.toggleModal);

    return (
        <div className={'modal-container'}>
            <div className={'modal-contents-box'}>
                <div className={'modal-message-box'}>
                    {msg}
                </div>
                <div className={'modal-confirm-box'}>
                    {!isConfirm ?
                        (<button id={'ok'}>OK</button>)
                        :
                        (
                            <>
                                <button id={'y'}>Yes</button>
                                <button id={'n'}>No</button>
                            </>
                        )}

                </div>
            </div>
        </div>
    )
}

export default Modal;
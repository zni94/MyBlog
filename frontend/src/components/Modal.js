import '../css/modal.css'

const Modal = (props) => {
    const {isConfirm} = props;

    return (
        <div className={'modal-container'}>
            <div className={'modal-contents-box'}>
                <div className={'modal-message-box'}>
                    TEST MESSAGE
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
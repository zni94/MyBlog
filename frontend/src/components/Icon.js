import '../css/icon.css'
import {addActiveById, removeActive} from "../modules/activeControl";

const Icon = (props) => {
    const {onDoubleClick, children, title} = props;

    const onMouseDown = (e) => {
        removeActive('icon-container')
        addActiveById(e.target, 'iconContainer')
    }

    return (
        <div className={'icon-container'}
             id={'iconContainer'}
             onDoubleClick={onDoubleClick}
             onMouseDown={onMouseDown}
        >
            <button className={'icon-image'}>
                {children}
            </button>
            <label className={'icon-name'}>
                {title}
            </label>
        </div>
    )
}

export default Icon;
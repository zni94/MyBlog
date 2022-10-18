import '../css/icon.css'
import {addActiveById, removeActive} from "../modules/activeControl";

const Icon = (props) => {
    const {onDoubleClick, thumbnail, title} = props;

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
                <svg width={50} height={50}>
                    <image width={50} height={50} href={thumbnail}/>
                </svg>
            </button>
            <label className={'icon-name'}>
                {title}
            </label>
        </div>
    )
}

export default Icon;
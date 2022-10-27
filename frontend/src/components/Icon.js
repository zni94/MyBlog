import '../css/icon.css'
import {addActiveById, removeActive} from "../modules/activeControl";

const Icon = (props) => {
    const {onDoubleClick, thumbnail, title, target, path} = props;

    const onMouseDown = (e) => {
        removeActive('icon-container')
        addActiveById(e.target, 'iconContainer')
    }

    return (
        <div className={'icon-container'}
             id={'iconContainer'}
             onDoubleClick={onDoubleClick}
             onMouseDown={onMouseDown}
             data-target={target}
             data-path={path}
        >
            <button className={'icon-image'}>
                <svg width={36} height={36}>
                    <image width={36} height={36} href={thumbnail}/>
                </svg>
            </button>
            <label className={'icon-name'}>
                {title}
            </label>
        </div>
    )
}

export default Icon;
import '../css/window.css';
import {useState} from "react";
import {promise} from "../modules/promise";

const Window = (props) => {
    const {title, onClose, children, name} = props;

    const [isMax, setIsMax] = useState(false)

    // DRAG
    const [currPosition, setCurrPosition] = useState({x: 0, y: 0});
    const [position, setPosition] = useState({x: 0, y: 0});
    const [nextPosition, setNextPosition] = useState({x: 0, y: 0});

    const dragHandler = {
        onDragStart(e) {
            e.dataTransfer.setDragImage(new Image(), 0, 0);

            if (isMax) return;

            setCurrPosition({x: e.clientX, y: e.clientY});
        },
        onDragOver(e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move'

            if (isMax) return;

            setPosition({
                x: nextPosition.x + e.clientX - currPosition.x,
                y: nextPosition.y + e.clientY - currPosition.y,
            });
        },
        onDragEnd() {
            if (isMax) return;

            setNextPosition({x: position.x, y: position.y});
        }
    }

    const hideHandler = (e) => {
        const parent = findParentNode(e.target, 'windowContainer');

        promise().then(() => {
            parent.classList.remove('active')
            parent.classList.add('hide');
        })

    }

    const maximizeHandler = (e) => {
        const parent = findParentNode(e.target, 'windowContainer');

        promise().then(() => {
            setIsMax(true)
        }).then(() => {
            parent.classList.add('max')
        })
    }

    const minimizeHandler = (e) => {
        const parent = findParentNode(e.target, 'windowContainer');

        promise().then(() => {
            setIsMax(false)
        }).then(() => {
            parent.classList.remove('max')
        })
    }

    const activeHandler = (e) => {
        const containers = document.getElementsByClassName('window-container');
        [...containers].forEach(container => {
            container.classList.remove('active');
        })

        const container = findParentNode(e.target, 'windowContainer');
        container.classList.add('active')
    }

    return (
        <div className={'window-container'}
             id={'windowContainer'}
             name={'window-' + name}
             style={{
                 left: position.x + 'px',
                 top: position.y + 'px'
             }}
             onMouseDown={activeHandler}
             draggable={true}
        >
            <div className={'window-nav-bar'}
                 onDragStart={dragHandler.onDragStart}
                 onDragOver={dragHandler.onDragOver}
                 onDragEnd={dragHandler.onDragEnd}
                 onDoubleClick={!isMax ? maximizeHandler : minimizeHandler}
                 draggable={true}>
                <div className={'window-title'}>{title}</div>
                <ul>
                    <li onMouseDown={hideHandler}>
                        <span className="material-symbols-outlined">
                            minimize
                        </span>
                    </li>
                    <li onMouseDown={!isMax ? maximizeHandler : minimizeHandler}>
                        {!isMax ?
                            <span className="material-symbols-outlined">
                                magnification_large
                            </span> :
                            <span className="material-symbols-outlined">
                                magnification_small
                            </span>
                        }
                    </li>
                    <li onMouseDown={onClose}>
                        <span className="material-symbols-outlined">
                            close
                        </span>
                    </li>
                </ul>
            </div>
            <div className={'controlWindow-contents'} draggable={true}>
                {children}
            </div>
        </div>
    )
}

export default Window

const findParentNode = (target, findName) => {
    let returnTarget = target;
    while (returnTarget.getAttribute('id') !== findName) {
        returnTarget = returnTarget.parentNode;
    }

    return returnTarget
}
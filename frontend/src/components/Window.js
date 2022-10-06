import '../css/window.css';
import {useState} from "react";

const Window = (props) => {
    const {title, onClose, children} = props;

    // DRAG
    const [currPosition, setCurrPosition] = useState({x: 0, y: 0});
    const [position, setPosition] = useState({x: 0, y: 0});
    const [nextPosition, setNextPosition] = useState({x: 0, y: 0});

    const dragHandler = {
        onDragStart(e) {
            e.dataTransfer.setDragImage(new Image(), 0, 0);

            setCurrPosition({x: e.clientX, y: e.clientY});
        },
        onDragOver(e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move'

            setPosition({
                x: nextPosition.x + e.clientX - currPosition.x,
                y: nextPosition.y + e.clientY - currPosition.y,
            });
        },
        onDragEnd() {
            setNextPosition({x: position.x, y: position.y});
        }
    }

    return (
        <div className={'window-container'}
             id={'windowContainer'}
             style={{transform: 'translate(' + position.x + 'px,' + position.y + 'px)'}}
             draggable={true}
        >
            <div className={'window-nav-bar'}
                 onDragStart={dragHandler.onDragStart}
                 onDragOver={dragHandler.onDragOver}
                 onDragEnd={dragHandler.onDragEnd}
                 draggable={true}>
                <div className={'window-title'}>{title}</div>
                <ul>
                    <li>-</li>
                    <li>□</li>
                    <li onClick={onClose}>&times;</li>
                </ul>
            </div>
            <div className={'window-contents'}>
                {children}
            </div>
        </div>
    )
}

export default Window
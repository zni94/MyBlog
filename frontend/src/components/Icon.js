const Icon = (props) => {
    const {onDoubleClick, children, title} = props;

    return (
        <div className={'icon-container'} onDoubleClick={onDoubleClick}>
            <button className={'icon-image'}>
                IMAGE
                {children}
            </button>
            <label className={'icon-name'}>
                {title}
            </label>
        </div>
    )
}

export default Icon;
const Icon = (props) => {
    const onClick = (e) => {
        console.log('CLICK')
    }

    return (<div className={'icon-container'}>
        <button className={'icon-image'}></button>
        <label className={'icon-name'}></label>
    </div>)
}

export default Icon;
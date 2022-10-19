import WebStormIcon from "../Icons/ide/WebStormIcon";
import IntelliJIcon from "../Icons/ide/IntelliJIcon";

const IDE = () => {
    return (
        <div className={'contents-container'}>
            <div className={'contents'}>
                <ul>
                    <li>
                        <IntelliJIcon/>
                    </li>
                    <li>
                        <WebStormIcon/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default IDE;
import TStoryIcon from "../Icons/sns/TStoryIcon";
import NaverIcon from "../Icons/sns/NaverIcon";
import InstagramIcon from "../Icons/sns/InstagramIcon";

const SNS = () => {
    return (
        <div className={'contents-container'}>
            <div className={'contents'}>
                <ul>
                    <li>
                        <TStoryIcon/>
                    </li>
                    <li>
                        <NaverIcon/>
                    </li>
                    <li>
                        <InstagramIcon/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SNS;
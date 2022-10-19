import TStoryIcon from "../Icons/sns/TStoryIcon";
import NaverIcon from "../Icons/sns/NaverIcon";
import InstagramIcon from "../Icons/sns/InstagramIcon";
import GithubIcon from "../Icons/sns/GithubIcon";

const SNS = () => {
    const SNS_ITEMS = [
        {icon: <TStoryIcon/>},
        {icon: <NaverIcon/>},
        {icon: <InstagramIcon/>},
        {icon: <GithubIcon/>},
    ]

    return (
        <div className={'contents-container'}>
            <div className={'contents'}>
                <ul>
                    {SNS_ITEMS.map((item, index) => (
                        <li key={index}>{item.icon}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SNS;
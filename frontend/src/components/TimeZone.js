import {useEffect, useState} from "react";

const TimeZone = () => {
    const date = new Date();

    const [hours, setHours] = useState(date.getHours());
    const [minutes, setMinutes] = useState(date.getMinutes());
    const [seconds, setSeconds] = useState(date.getSeconds() - 1);

    useEffect(() => {
        const times = setInterval(() => {
            setHours(date.getHours())
            setMinutes(date.getMinutes())
            setSeconds(date.getSeconds())
        }, 1000)
        return () => clearInterval(times);
    }, [hours, minutes, seconds]);

    return (
        <div className={'time-zone-container'}>
            {hours > 12 ? `PM  ${hours - 12}` : `AM  ${hours}`} : {minutes < 10 ? `0${minutes}` : minutes}
        </div>
    )
}

export default TimeZone;
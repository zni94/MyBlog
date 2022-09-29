import {useEffect, useState} from "react";
import {promise} from "../modules/promise";

const TimeZone = () => {
    const [date, setDate] = useState(new Date());

    const [hours, setHours] = useState(date.getHours());
    const [minutes, setMinutes] = useState(date.getMinutes());
    const [seconds, setSeconds] = useState(date.getSeconds());

    useEffect(() => {
        const times = setInterval(() => {
            promise(setDate(new Date()))
                .then(() => {
                    setHours(date.getHours())
                    setMinutes(date.getMinutes())
                    setSeconds(date.getSeconds())
                })
        }, 1000)

        return () => clearInterval(times);
    }, [date, hours, minutes, seconds]);

    return (
        <div className={'time-zone-container'}>
            {hours > 12 ? `PM  ${hours - 12}` : `AM  ${hours}`} : {minutes < 10 ? `0${minutes}` : minutes}
        </div>
    )
}

export default TimeZone;
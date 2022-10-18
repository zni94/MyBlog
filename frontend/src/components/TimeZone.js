import {useEffect, useState} from "react";
import {promise} from "../modules/promise";
import {removeActive} from "../modules/activeControl";

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

    const onMouseDown = () => {
        removeActive('icon-container')
        removeActive('window-container')

        const calendar = document.getElementsByClassName('react-calendar')[0];
        calendar.classList.contains('hide') ? calendar.classList.remove('hide') : calendar.classList.add('hide')

    }

    return (
        <div className={'time-zone-container'} onMouseDown={onMouseDown}>
            <div>
                {hours > 12 ? `PM  ${hours - 12}` : `AM  ${hours}`} : {minutes < 10 ? `0${minutes}` : minutes}
            </div>
            <div>
                {date.getFullYear()} / {date.getUTCMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1} / {date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}
            </div>
        </div>
    )
}

export default TimeZone;
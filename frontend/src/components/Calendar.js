import ReactCalendar from 'react-calendar';
import {useState} from "react";
import '../css/calendar.css'

const Calendar = () => {
    const [value, onChange] = useState(new Date())

    return (<ReactCalendar
        className={'hide'}
        value={value}
        onChange={onChange}
        formatDay={(locale, date) =>
            date.toLocaleString('en', {day: 'numeric'})
        }
    />)
}

export default Calendar;
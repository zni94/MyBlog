import { useEffect, useState } from 'react';
import { promise } from '../modules/promise';
import { removeActive } from '../modules/activeControl';

const TimeZone = () => {
  const [calendar, setCalendar] = useState(false);
  const [date, setDate] = useState(new Date());

  const [hours, setHours] = useState(date.getHours());
  const [minutes, setMinutes] = useState(date.getMinutes());
  const [seconds, setSeconds] = useState(date.getSeconds());

  useEffect(() => {
    const times = setInterval(() => {
      promise(setDate(new Date())).then(() => {
        setHours(date.getHours());
        setMinutes(date.getMinutes());
        setSeconds(date.getSeconds());
      });
    }, 1000);

    return () => clearInterval(times);
  }, [date, hours, minutes, seconds]);

  const clickEvent = () => {
    const calendarEle = document.getElementsByClassName('react-calendar')[0];
    calendarEle.classList.remove('active');
  };

  const onClick = () => {
    removeActive('icon-container');
    removeActive('window-container');

    const calendarEle = document.getElementsByClassName('react-calendar')[0];
    if (!calendarEle.classList.contains('active')) {
      calendarEle.classList.add('active');

      document.getElementById('layout').addEventListener('click', clickEvent);
    } else {
      calendarEle.classList.remove('active');

      document
        .getElementById('layout')
        .removeEventListener('click', clickEvent);
    }
  };

  return (
    <div className={'time-zone-container'} onClick={onClick}>
      <div>
        {hours > 12 ? `PM  ${hours - 12}` : `AM  ${hours}`}
        &nbsp;:&nbsp;
        {minutes < 10 ? `0${minutes}` : minutes}
      </div>
      <div>
        {date.getFullYear()}
        &nbsp;/&nbsp;
        {date.getUTCMonth() + 1 < 10
          ? `0${date.getMonth() + 1}`
          : date.getMonth() + 1}
        &nbsp;/&nbsp;
        {date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}
      </div>
    </div>
  );
};

export default TimeZone;

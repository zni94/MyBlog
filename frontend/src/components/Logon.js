import { useEffect, useState } from 'react';
import { promise } from '../modules/promise';
import '../css/logon.css';
import { useDispatch } from 'react-redux';
import { toggleOnOff } from '../store/src/toggleLogon';
import { isNull } from '../modules/isNull';

const Logon = () => {
  const day = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];

  const dispatch = useDispatch();

  const [date, setDate] = useState(new Date());
  // Log-on, Log-off toggle switch
  const [state, setState] = useState(false);

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

  const logonHandler = () => {
    promise()
      .then(() => {
        setState(true);
      })
      .then(() => {
        const inputEle = document.getElementById('pwd');
        if (!isNull(inputEle)) inputEle.focus();
      });
  };
  const logoffHandler = () => {
    promise()
      .then(() => {
        const inputEle = document.getElementById('pwd');
        if (!isNull(inputEle)) inputEle.value = '';
      })
      .then(() => {
        setState(false);
      });
  };

  const enterHandler = () => {
    promise()
      .then(() => {
        const inputEle = document.getElementById('pwd');
        if (!isNull(inputEle)) inputEle.value = '';
      })
      .then(() => {
        dispatch(toggleOnOff(true));
      });
  };

  useEffect(() => {
    window.addEventListener('keyup', (e) => {
      if (!state) {
        logonHandler();
      }
    });
  }, [state]);

  return state ? (
    <div className={'logon-container'}>
      <div className={'logon-zone'}>
        <div className={'profile-zone'}>
          <div className={'profile-thumbnail'}>
            <span className={'material-symbols-outlined'}>person</span>
          </div>
          <div className={'profile-name'}>YoungJin Kwon</div>
        </div>
        <div className={'button-zone'}>
          <input id={'pwd'} type={'password'} placeholder={'PIN'} />
          <button onClick={enterHandler}>게스트로 입장</button>
        </div>
      </div>
      <div className={'logon-toolbar'} onClick={logoffHandler}>
        <span className={'material-symbols-outlined'}>arrow_back</span>
      </div>
    </div>
  ) : (
    <div className={'logoff-container'} onClick={logonHandler}>
      <div className={'time-zone'}>
        <div id={'time'}>
          {hours > 12 ? hours - 12 : hours}:
          {minutes < 10 ? `0${minutes}` : minutes}
        </div>
        <div id={'date'}>
          {date.getUTCMonth() + 1 < 10
            ? `0${date.getMonth() + 1}`
            : date.getMonth() + 1}
          월&nbsp;
          {date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}
          일&nbsp;
          {day[date.getDay()]}
        </div>
      </div>
    </div>
  );
};

export default Logon;

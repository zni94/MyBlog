import {useEffect, useState} from 'react';
import {promise} from '../modules/promise';
import '../css/logon.css';
import {useDispatch, useSelector} from "react-redux";

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

    const {logon} = useSelector(state => state.toggleLogon)

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

    let timer;

    const runTimer = () => {
        timer = setTimeout(() => {
            setState(false);
        }, 1000 * 60 * 1)
    }

    useEffect(() => {
        window.addEventListener('keydown', () => {
            if (state) {
                promise().then(() => {
                    clearTimeout(timer);
                    runTimer();
                }).then(() => {
                    const input = document.getElementById('pwd');
                    input.focus()
                })
            } else {
                setState(true)
            }
        })
        window.addEventListener('click', () => {
            if (state) {
                promise().then(() => {
                    clearTimeout(timer);
                    runTimer();
                }).then(() => {
                    const input = document.getElementById('pwd');
                    input.focus()
                })
            } else {
                setState(true)
            }
        })
    }, [state])

    const logonHandler = () => {
        promise().then(() => {
            setState(true);
        }).then(() => {
            runTimer();
        }).then(() => {
            const input = document.getElementById('pwd');
            input.focus()
        })
    };

    return state ? (
        <div className={'logon-container'}>
            <div className={'logon-zone'}>
                <div className={'profile-zone'}>
                    <div className={'profile-thumbnail'}>
                    <span className={'material-symbols-outlined'}>
                        person
                    </span>
                    </div>
                    <div className={'profile-name'}>GUEST</div>
                </div>
                <div className={'button-zone'}>
                    <input id={'pwd'} type={'password'} placeholder={'PIN'}/>
                </div>
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

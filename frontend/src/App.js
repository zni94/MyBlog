import './App.css';
import { Route, Routes } from 'react-router';
import Background from './components/Background';
import { useSelector } from 'react-redux';
import Logon from './components/Logon';

const App = () => {
    const {logon} = useSelector(state => state.toggleLogon);

    return (
        <Routes>
            <Route path={'/'} element={logon ? <Background/> : <Logon/>}/>
        </Routes>
    );
}

export default App;

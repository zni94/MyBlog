import './App.css';
import {Route, Routes} from "react-router";
import Background from "./components/Background";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Background/>}/>
        </Routes>
    );
}

export default App;

import {combineReducers} from "redux";
import togglePages from "./src/togglePages";

const rootReducer = combineReducers({
    togglePages,
});

export default rootReducer;